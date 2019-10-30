/* eslint-disable no-unneeded-ternary */
import {
  respondWithSuccess,
  respondWithWarning
} from '../helpers/responseHandler';
import {
  updateOneUser,
  findUsers,
  fetchSingleUser
} from '../services/userServices';

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
  return res.render("userProfile", { user, isAuth: req.isAuth, isAdmin: req.auth.isAdmin });
};

/**
 * Render users page for admin
 * @param {object} req
 * @param {object} res
 */
export const renderAdminUsersPage = async (req, res) => {
  const users = await findUsers();

  return res.render('admin/users', {
    users: users || [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin
  });
};
