import Sequelize from 'sequelize';
import { findSingleUser, updateOneUser } from '../services/userServices';
import { respondWithWarning } from '../helpers/responseHandler';
import { verifyToken, formatJWTErrorMessage } from '../helpers/jwt';

/**
 * Method to generate token
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const authenticateUserToken = (req, res, next) => {
  let token = req.cookies.get('token', { signed: true }) || req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (!token) {
    return respondWithWarning(res, 401, 'Session Expired');
  }
  try {
    const { key } = verifyToken(token);
    req.auth = key;
    return next();
  } catch (error) {
    return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
  }
};

/**
 * Function to check if a user email is valid
 * @param {Express.Request} req this is the request object
 * @param {Express.Response} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validUser = async (req, res, next) => {
  const { email } = req.body;

  // user should login with both email and username
  const findUser = await findSingleUser({ [Sequelize.Op.or]: [{ email }, { username: email }] });
  if (!findUser) {
    return respondWithWarning(res, 401, 'Incorrect email or password');
  }

  if (findUser.isBlocked) { return respondWithWarning(res, 403, 'Forbidden! You have been banned from posting on this site. However, you may go on to browse existing posts.'); }

  req.user = findUser.toJSON();
  return next();
};

/**
 * Check if user email already exists
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
export const verifyUniqueUserEmail = async (req, res, next) => {
  const { email } = req.body;

  const findUser = await findSingleUser({ email });
  if (findUser) {
    return respondWithWarning(res, 409, 'User with this email already exists');
  }
  return next();
};

/**
 * Check if username already exists
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
export const verifyUniqueUserUsername = async (req, res, next) => {
  const { username } = req.body;

  const findUser = await findSingleUser({ username });
  if (findUser) {
    return respondWithWarning(res, 409, 'Username already taken');
  }
  return next();
};

/**
 * Authenticate forgot password reset token
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const authenticateForgotToken = async (req, res, next) => {
  const { token } = req.params;
  try {
    const { key } = await verifyToken(token);
    req.params.userId = key.userId;
    return next();
  } catch (error) {
    const user = await updateOneUser({ isPasswordReset: false },
      { userId: req.params.userId });
    return res.redirect('/linkexpired');
  }
};

/**
 * Function validate verification code link from email
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const authenticateVerifyEmailToken = async (req, res, next) => {
  const { token } = req.params;
  try {
    const { key } = await verifyToken(token);
    req.params.userId = key.userId;
    return next();
  } catch (error) {
    return res.redirect('/verificationLinkExpired');
  }
};
