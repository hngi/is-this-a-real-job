import {
  respondWithSuccess,
  respondWithWarning
} from '../helpers/responseHandler';
import {
  deleteOneInvite,
  upvoteOneInvite,
  fetchOneInvite,
  fetchAllInvites,
  saveInvite,
  updateOneInvite,
  searchInvites
} from '../services/inviteServices';
import { findCommentsForPost } from '../services/commentServices';
import { findSingleUser } from '../services/userServices';

export const getOneInvite = async (req, res) => {
  try {
    const { inviteId } = req.params;

    const invite = await fetchOneInvite({
      inviteId
    });

    if (invite) {
      return respondWithSuccess(res, 200, 'Invite found', invite);
    }
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
    req.body.userId = req.auth.userId;
    req.body.media = !req.files ? '' : req.files[0].secure_url;
    const invite = await saveInvite(req.body).catch(error => {
      throw error;
    });

    respondWithSuccess(res, 201, 'Job Invite submitted successfully', invite);
  } catch (error) {
    respondWithWarning(res, error.status, error.message);
  }
};

/**
 * Search invites
 * @param {*} req
 * @param {*} res
 * @returns Invites
 */
export const renderSearchResults = async (req, res) => {
  try {
    const { q } = req.query;

    const invites = await searchInvites(q);

    return res.render('searchResults', {
      invites: invites || [],
      isAuth: req.isAuth,
      isAdmin: req.auth.isAdmin,
      username: req.auth.username, name: req.auth.name
    });
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};

/**
 * REST Api for Invites search
 * - Returns JSON payload containing Invites results
 *
 * @param {*} req
 * @param {*} res
 */
export const searchInvitesApi = async (req, res) => {
  try {
    const { q } = req.query;

    const invites = await searchInvites(q);

    if (invites) {
      return respondWithSuccess(res, 200, 'Invites found', invites);
    }
    respondWithWarning(res, 404, 'Invite not found');
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
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

  const toUpdate = {
    title: req.body.title || req.invite.title,
    body: req.body.body || req.invite.body,
    location: req.body.location || req.invite.location,
    company: req.body.company || req.invite.company,
    media: req.body.media || req.invite.media,
  };

  try {
    const invite = await updateOneInvite(inviteId, toUpdate);

    respondWithSuccess(res, 200, 'Job Invite updated successfully', invite);
  } catch (error) {
    respondWithWarning(res, error.status, error.message);
  }
};

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
  await deleteOneInvite({
    inviteId
  });
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
  const invite = await upvoteOneInvite(vote, {
    inviteId
  });
  respondWithSuccess(res, 200, 'Upvote successful', invite.toJSON());
};

/**
 * Render single invite page
 * @param {object} req
 * @param {object} res
 */
export const renderSinglePostPage = async (req, res) => {
  const { inviteId } = req.params;

  const data = await Promise.all([
    findCommentsForPost(inviteId),
    fetchOneInvite({
      inviteId
    }),
    findSingleUser({ userId: req.auth.userId })
  ]);
  return res.render('singlepost', {
    comments: data[0],
    invite: data[1],
    user: data[2],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    userId: req.auth.userId,
    username: req.auth.username, name: req.auth.name
  });
};

/**
 * Render job invites page
 * @param {object} req
 * @param {object} res
 */
export const renderJobInvitesPage = async (req, res) => {
  const invites = await fetchAllInvites();

  const user = await findSingleUser({ userId: req.auth.userId });

  return res.render('jobInvites', {
    user,
    username: req.auth.username,
    name: req.auth.name,
    invites: invites || [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
  });
};

/**
 * Render job invites page for admin
 * @param {object} req
 * @param {object} res
 */
export const renderAdminJobInvitesPage = async (req, res) => {
  const invites = await fetchAllInvites();

  return res.render('admin/posts', {
    invites: invites || [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
  });
};

/**
 * Render Edit Invite
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const renderEditInvitePage = async (req, res) => {
  if (req.invite.userId !== req.auth.userId && !req.auth.isAdmin) {
    return res.render('401', {
      isAuth: req.isAuth,
      isAdmin: req.auth.isAdmin,
      user: req.user
    });
  }

  return res.render('editPost', {
    invite: req.invite,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    user: req.user
  });
};
