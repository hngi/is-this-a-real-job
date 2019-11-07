import { respondWithWarning } from '../helpers/responseHandler';
import { findSingleUser } from '../services/userServices';


/**
 * Function to check if a user ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */

export const validateUserById = async (req, res, next) => {
  const { userId } = req.params;
  const findUser = await findSingleUser({ userId });
  if (!findUser) {
    return respondWithWarning(res, 404, 'User not found');
  }
  req.user = findUser.toJSON();
  return next();
};

/**
 * Function to check if a user email is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */

export const validateUserByEmail = async (req, res, next) => {
  const { email } = req.body;
  const findUser = await findSingleUser({ email });
  if (!findUser) {
    return respondWithWarning(res, 404, 'User not found');
  }
  req.user = findUser.toJSON();
  return next();
};

/**
 * Function to check if a user has a pending password reset
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */

export const checkUserPasswordReset = async (req, res, next) => {
  const { email } = req.user;
  const findUser = await findSingleUser({ email, isPasswordReset: true });
  if (!findUser) {
    return respondWithWarning(res, 422, 'Password reset link expired');
  }
  return next();
};


/**
 * Check if same user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const checkIfSameUser = async (req, res, next) => {
  const { username } = req.params;

  if (req.auth.username === username) {
    return res.render('404', { status: 404 });
  }
  return next();
};
