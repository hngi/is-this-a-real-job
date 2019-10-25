import { respondWithSuccess, respondWithWarning } from '../helpers/responseHandler';
import {
  deleteOneInvite,
  upvoteOneInvite,
  fetchOneInvite,
  fetchAllInvites,
  saveInvite,
  updateOneInvite,
} from '../services/inviteServices';

export const getOneInvite = async (req, res) => {
  try {
    const { inviteId } = req.params;

    const invite = await fetchOneInvite({ inviteId });

    if (invite) { return respondWithSuccess(res, 200, 'Invite found', invite); }
    respondWithWarning(res, 404, 'Invite not found');
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};

export const getAllInvites = async (req, res) => {
  try {
    const invitesList = await fetchAllInvites();

    respondWithSuccess(res, 200, 'Retrieved invites', invitesList);
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};

export const saveNewInvite = async (req, res) => {
  try {
    const invite = await saveInvite(req.body).catch(error => { throw error; });

    respondWithSuccess(res, 201, 'Job Invite submitted successfully', invite);
  } catch (error) {
    respondWithWarning(res, error.status, error.message);
  }
};

/**
 * Update Invite
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const updateInvite = async (req, res) => {
  const { inviteId } = req.params;

  try {
    const invite = await updateOneInvite(inviteId, req.body);

    respondWithSuccess(res, 200, 'Job Invite updated successfully', invite);
  } catch (error) {
    respondWithWarning(res, error.status, error.message);
  }
}

/**
 * delete Invite
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const deleteInvite = async (req, res) => {
  const { inviteId, title } = req.invite;
  if (!inviteId) {
    respondWithWarning(res, 400, 'Bad Request');
  }
  await deleteOneInvite({ inviteId });
  respondWithSuccess(res, 200, `${title} deleted successfully`);
};

/**
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
  respondWithSuccess(res, 200, 'Upvote successful', invite.toJSON());
};

/**
 * Render Edit Invite 
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const editInvite = async (req, res) => {
  return res.render('editPost', {
    invite: req.invite,
  });
}
