import { respondWithWarning } from '../helpers/responseHandler';
import { findSingleUser } from '../services/inviteServices';
import { verifyToken, formatJWTErrorMessage } from '../helpers/jwt';

/**
   * Method to generate token
   * @param {object} req
   * @param {object} res
   * @param {Function} next
   * @returns {Function} next middleware
   */
export const authenticateAdminToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (!token) {
    return respondWithWarning(res, 401, 'Session Expired');
  }
  try {
    const { key } = verifyToken(token);
    req.auth = key.isAdmin();
    return next();
  } catch (error) {
    return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
  }
};

/**
 * Function to check if a user ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateAdmin = async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return respondWithWarning(res, 400, 'Bad Request');
  }

  const isAdmin = await findSingleUser({ isAdmin });
  if (!isAdmin) {
    return respondWithWarning(res, 404, 'User not an Admin');
  }
  req.admin = isAdmin.toJSON();
  return next();
};
