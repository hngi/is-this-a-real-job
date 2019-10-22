import { respondWithWarning } from '../helpers/responseHandler';


/**
 * Function to check if a user ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */

export const validateAdmin = async (req, res, next) => {
  const { isAdmin } = req.auth; // since the previous middleware validateUserToke already exposed req.auth.isAdmin and req.auth.userId to the route
  if (!isAdmin) {
    return respondWithWarning(res, 403, 'Authorized access');
  }
  // in the end, you still have req.auth.userId and req.auth.isAdmin for the next middleware to use.
  return next();
  };