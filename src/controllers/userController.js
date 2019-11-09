/* eslint-disable no-unneeded-ternary */
import _ from 'lodash';
import crypto from 'crypto';
import { respondWithSuccess,
  respondWithWarning } from '../helpers/responseHandler';
import { updateOneUser,
  findUsers,
  fetchSingleUser,
  findSingleUser,
  updatePassword,
  findUsersWithPagination, } from '../services/userServices';
import { findReports } from '../services/reportServices';
import { generateResetToken, generateToken } from '../helpers/jwt';
import { resetPasswordEmail, newUserVerificationEmail } from '../helpers/emailTemplates';
import { SITE_URL } from '../config/constants';
import { sendMail } from '../services/emailServices';
import { passwordHash } from '../helpers/hash';


/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

export const blockUser = async (req, res) => {
  const { userId } = req.params;
  const isBlocked = req.user.isBlocked ? false : true;
  try {
    const user = await updateOneUser({ isBlocked }, { userId }).catch(e => {
      throw e;
    });
    respondWithSuccess(
      res, 200, 'User successfully blocked', user.toJSON()
    );
  } catch (error) {
    return respondWithWarning(res, error.status, error.message);
  }
};

/**
 * Fetch users
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getUsers = async (req, res) => {
  const users = await findUsers();

  return respondWithSuccess(
    res, 200, 'Successful', users
  );
};

/**
 * Fetch one user for render endpoints
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getUserByUserId = async (req, res, next) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.redirect('/login');
  }
  const user = await findSingleUser({ userId });
  req.user = user;
  next();
};

/**
 * check if user is admin for admin render endpoints
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const checkRenderIsAdmin = async (req, res, next) => {
  if (!req.auth.isAdmin) {
    return res.redirect('/404');
  }
  next();
};

/**
 * check if user is already logged in
 * This code only applies to login and signup pages only
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const checkRenderIsAuth = async (req, res, next) => {
  if (req.isAuth) {
    return res.redirect('/posts');
  }
  return next();
};

/**
 * Fetch single user
 *
 * @param {*} req
 * @param {*} res
 */
export const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await fetchSingleUser({ username });
    if (!user) {
      return respondWithWarning(res, 404, 'User not found');
    }
    return respondWithSuccess(
      res, 200, 'User found', user
    );
  } catch (error) {
    return respondWithWarning(res, 400, 'Error fetching User');
  }
};

/**
 * Report User
 * @param {*} req request
 * @param {*} res response
 */
export const renderReportUserPage = async (req, res) => res.render('reportUser', {
  isAuth: req.isAuth,
  username: req.auth.username,
  isAdmin: req.auth.isAdmin,
  profileImage: req.auth.profileImage,
  reportedUser: req.user,
  meta: {
    title: 'Report User - Is This A Real Job',
    description: `Report ${req.user.username} - Is This A Real Job`
  }
});

/**
 * Render user profile
 *
 * @param {*} req
 * @param {*} res
 */
export const renderUserProfile = async (req, res) => {
  const { username } = req.params;

  const user = await fetchSingleUser({ username });
  if (!user) {
    return res.render('404', { status: 404 });
  }

  // Get users email hash

  let title;
  const description = `View ${user.name}'s profile on Is This A Real Job`;

  if (req.auth.username === user.username) {
    title = `My Profile ${user.name} - Is This A Real Job`;
  } else {
    title = `${user.name} - Is This A Real Job`;
  }

  return res.render('userProfile', {
    user,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    profileImage: req.auth.profileImage,
    name: req.auth.name,
    meta: { title, description },
    crypto
  });
};

/**
 * Render users page for admin
 * @param {object} req
 * @param {object} res
 */
export const renderAdminUsersPage = async (req, res) => {
  const limit = 15;
  let page;

  if (req.query.page === 1 || req.query.page === 0 || !req.query.page) {
    page = 0;
  } else {
    page = Number(req.query.page) - 1;
  }
  const offset = page * limit;
  const { users, count } = await findUsersWithPagination({}, offset, limit);

  const pages = Math.ceil(count / limit);

  const title = `${offset} - ${offset + limit} Users - Admin - Is This A Real Job`;
  const description = 'Our app helps you check if job opportunities are real or not.';

  return res.render('admin/users', {
    users: users || [],
    page: req.query.page || 1,
    pages,
    isAuth: req.isAuth,
    profileImage: req.auth.profileImage,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    meta: { title, description },
    crypto
  });
};

/**
 * Render users page for admin
 * @param {object} req
 * @param {object} res
 */
export const renderAdminReportedUsersPage = async (req, res) => {
  const limit = 15;
  let page;

  if (req.query.page === 1 || req.query.page === 0 || !req.query.page) {
    page = 0;
  } else {
    page = Number(req.query.page) - 1;
  }
  const offset = page * limit;
  const { reports, count } = await findReports({},
    offset,
    limit);

  const pages = Math.ceil(count / limit);

  const title = `${offset} - ${offset + limit} Reported Users - Admin - Is This A Real Job`;
  const description = 'Our app helps you check if job opportunities are real or not.';

  return res.render('admin/reportedUsers', {
    reports: reports || [],
    page: req.query.page || 1,
    pages,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    profileImage: req.auth.profileImage,
    name: req.auth.name,
    meta: { title, description },
    crypto
  });
};

/**
 * Render login page
 * @param {object} req
 * @param {object} res
 */
export const renderLoginPage = async (req, res) => {
  const { expired } = req.query;
  let error;

  if (Number(expired) === 1) {
    error = 'Session has expired. Login to continue';
  }

  const title = 'Login - Is This A Real Job';
  const description = 'Our app helps you check if job opportunities are real or not.';

  return res.render('login', {
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    meta: { title, description },
    error
  });
};

/** Function for fogot password
 *
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @returns {Object} this returns an object
 */

export const forgotPassowrd = async (req, res) => {
  if (req.user.isPasswordReset) {
    updateOneUser({ isPasswordReset: false },
      { userId: req.user.userId });
  }
  const token = await generateResetToken({ userId: req.user.userId }, { expiresIn: '1h' });
  const mailBody = resetPasswordEmail(
    req.user.name, SITE_URL, token, req.body.email
  );

  try {
    const user = await updateOneUser({ isPasswordReset: true }, { email: req.user.email });
    const sendEmail = sendMail(req.body.email, 'ITARJ - Reset Password', mailBody);
    return respondWithSuccess(res, 200, 'A link has been sent to your email. Kindly follow that link to reset your password');
  } catch (error) {
    return respondWithWarning(res, 500, 'Server Error');
  }
};

/**
 * Function to reset password with token
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @returns {Object} this returns an object
 */
export const resetForgotPassword = async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await passwordHash(password);
  try {
    const user = await updateOneUser({ password: hashedPassword, isPasswordReset: false },
      { email: req.user.email });
    return respondWithSuccess(
      res,
      200,
      'Password reset successful',
      _.omit(user.toJSON(), ['password'])
    );
  } catch (error) {
    return respondWithWarning(res, 500, 'Server Error');
  }
};

/**
 * Function to check if user has been verified
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @returns {Object} this returns an object
 */
export const checkUserVerification = async (req, res, next) => {
  if (req.isAuth) {
    const user = await findSingleUser({ userId: req.auth.userId });
    if (!user.isVerified) {
      const description = 'Our app helps you check if job opportunities are real or not.';
      return res.render('verifyAccount', { isAuth: req.isAuth, isAdmin: req.auth.isAdmin, meta: { title: 'Verify Account - ITARJ', description } });
    }
  }
  return next();
};

/**
 * Function to check if user has been verified
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @returns {Object} this returns an object
 */
export const sendUserVerification = async (req, res, next) => {
  const payload = {
    userId: req.auth.userId,
    isAdmin: req.isAdmin
  };
  const token = await generateToken(payload);
  const user = await findSingleUser({ userId: req.auth.userId });

  const mailBody = newUserVerificationEmail(
    user.name, SITE_URL, token, req.body.email
  );
  const sendEmail = sendMail(req.body.email, 'ITARJ - Verify Email', mailBody);
  const description = 'Our app helps you check if job opportunities are real or not.';
  return res.render('verifyAccount', { isAuth: req.isAuth, isAdmin: req.auth.isAdmin, meta: { title: 'Verify Account - ITARJ', description } });
};
