import { respondWithSuccess } from '../helpers/responseHandler';

/**
 * Increment upvote count
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const upvoteInvite = (req, res) => {
  const { invite } = req;
  const { upVotes } = invite;
  invite.update({
    upVotes: upVotes + 1
  });

  return respondWithSuccess(res, 200, 'Upvote successful', {
    upVotes: upVotes + 1
  });
};
