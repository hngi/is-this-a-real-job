import { respondWithSuccess } from '../helpers/responseHandler';
import Model from '../models';

const { Invite } = Model;

/*
 * Increment upvote count
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const upvoteInvite = (req, res) => {
  const { upVotes, inviteId } = req.invite;
  Invite.update(
    {
      upVotes: upVotes + 1,
    },
    { where: { inviteId } }
  );

  return respondWithSuccess(res, 200, 'Upvote successful', {
    upVotes: upVotes + 1,
  });
};
