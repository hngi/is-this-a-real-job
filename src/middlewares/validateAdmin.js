import { respondWithWarning } from '../helpers/responseHandler';

/**
 * Function to check if a user ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */

export const validateAdmin = async (req, res, next) => {
  const { isAdmin } = req.auth;
  if (!isAdmin) {
    return respondWithWarning(res, 403, 'Forbidden access');
  }
  return next();
};
