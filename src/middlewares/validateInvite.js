import { respondWithWarning } from '../helpers/responseHandler';
import { findSingleInvite } from '../services/inviteServices';

/**
 * Function to check if a invite ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateInvite = async (req, res, next) => {
    const { inviteId } = req.params;

    const findInvite = await findSingleInvite({ inviteId });
    if (!findInvite) {
        return respondWithWarning(res, 404, 'Job Invite not found');
    }
    req.invite = findInvite.toJSON();
    return next();
};
