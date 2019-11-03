/* eslint-disable no-unneeded-ternary */
import crypto from 'crypto';
import {
  respondWithSuccess,
  respondWithWarning
} from '../helpers/responseHandler';
import {
  updateOneUser,
  findUsers,
  fetchSingleUser,
  findSingleUser
} from '../services/userServices';
import { findReports } from '../services/reportServices';


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
    respondWithSuccess(res, 200, 'User successfully blocked', user.toJSON());
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

  return respondWithSuccess(res, 200, 'Successful', users);
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
    return respondWithSuccess(res, 200, 'User found', user);
  } catch (error) {
    return respondWithWarning(res, 400, 'Error fetching User');
  }
};

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
  const users = await findUsers();

  const title = `${users.length} Users - Admin - Is This A Real Job`;
  const description = 'Our app helps you check if job opportunities are real or not.';

  return res.render('admin/users', {
    users: users || [],
    isAuth: req.isAuth,
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
  const users = await findReports();

  const title = `${users.length} Reported Users - Admin - Is This A Real Job`;
  const description = 'Our app helps you check if job opportunities are real or not.';

  return res.render('admin/reportedUsers', {
    users: users || [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    meta: { title, description },
    crypto
  });
};
