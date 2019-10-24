import { respondWithSuccess, respondWithWarning } from '../helpers/responseHandler';
import { deleteOneInvite, upvoteOneInvite } from '../services/inviteServices';

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

/*
 * Increment upvote count
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const upvoteInvite = async (req, res) => {
  const { upVotes, inviteId } = req.invite;
  const { voteType } = req.params; // ture of false
  // user vote will determine if upvote or downvote
  const vote = voteType === 'true' ? upVotes + 1 : upVotes - 1;
  const invite = await upvoteOneInvite(vote, { inviteId });
  return respondWithSuccess(res, 200, 'Upvote successful', invite.toJSON());
};
