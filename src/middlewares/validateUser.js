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
