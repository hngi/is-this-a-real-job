import {
    respondWithSuccess,
    respondWithWarning,
} from '../helpers/responseHandler';
import { deleteOneInvite } from '../services/inviteServices';

/**
 * Increment upvote count
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const deleteInvite = async (req, res) => {
    const { inviteId, title } = req.invite;
    if (!inviteId) {
        return respondWithWarning(res, 400, 'Bad Request');
    }
    await deleteOneInvite({ inviteId });
    return respondWithSuccess(res, 200, `${title} deleted successfully`);
};
