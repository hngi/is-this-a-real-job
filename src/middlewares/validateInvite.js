import { respondWithWarning } from '../helpers/responseHandler';
import { fetchOneInvite } from '../services/inviteServices';

/**
 * Function to check if a invite ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateInvite = async (req, res, next) => {
  const { inviteId } = req.params;

  const findInvite = await fetchOneInvite({ inviteId });
  if (!findInvite) {
    return respondWithWarning(res, 404, 'Job Invite not found');
  }
  // console.log(findInvite);
  // req.invite = findInvite.toJSON();
  req.invite = findInvite;
  return next();
};

/**
 * Function to check if a invite is owned by user or user is admin is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateInviteOwner = async (req, res, next) => {
  if (req.auth.userId !== req.invite.userId && !req.auth.isAdmin ) {
    return respondWithWarning(res, 401, 'You are not authorized to perform this action');
  }

  return next();
};
