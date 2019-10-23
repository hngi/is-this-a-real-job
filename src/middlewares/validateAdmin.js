import { respondWithWarning } from '../helpers/responseHandler';
// import { findSingleInvite } from '../services/inviteServices';

/**
 * Function to check if user sending request is an admin/authorized
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 */
export const validateAdmin = async (req, res, next) => {
  const { isAdmin } = req.auth;
  if (!isAdmin) {
    return respondWithWarning(res, 401, 'Unauthorized operation');
  }
  return next();
};
