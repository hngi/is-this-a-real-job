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
  searchInvites,
  unvoteOneInvite,
  downVoteOneInvite,
  fetchOneVoteCount,
  fetchAllInvitesWithLimit,
  fetchAllInvitesNoOffset,
} from '../services/inviteServices';
import { findCommentsForPost } from '../services/commentServices';
import { findSingleUser } from '../services/userServices';
import { getQueryString } from '../helpers/stringplay';

export const getOneInvite = async (req, res) => {
  try {
    const { inviteId } = req.params;

    const invite = await fetchOneInvite({ inviteId });

    if (invite) {
      return respondWithSuccess(
        res, 200, 'Invite found', invite
      );
    }
    respondWithWarning(res, 404, 'Invite not found');
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};

export const getAllInvites = async (req, res) => {
  try {
    const invitesList = await fetchAllInvites();

    respondWithSuccess(
      res, 200, 'Retrieved invites', invitesList
    );
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};

export const saveNewInvite = async (req, res) => {
  try {
    req.body.userId = req.auth.userId;
    // req.body.media = req.files && !req.files[0]
    //  ? '' : req.files[0].secure_url; //No more file upload.
    const invite = await saveInvite(req.body).catch(error => {
      throw error;
    });

    respondWithSuccess(
      res, 201, 'Job Invite submitted successfully', invite
    );
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
  const limit = 15;
  let page;

  if (req.query.page === 1 || req.query.page === 0 || !req.query.page || !Number(req.query.page)) {
    page = 0;
  } else {
    page = Number(req.query.page) - 1;
  }

  const offset = page * limit;
  try {
    const { q } = req.query;

    const { invites, count } = await searchInvites(getQueryString(q), offset, limit);
    // const user = findSingleUser({ username: req.auth.username });

    const pages = Math.ceil(count / limit);

    const title = `Search for '${q}' - Is This A Real Job`;
    const description = `Search results for ${q}`;

    return res.render('searchResults', {
      invites: invites || [],
      isAuth: req.isAuth,
      isAdmin: req.auth.isAdmin,
      username: req.auth.username,
      name: req.auth.name,
      userId: req.auth.userId,
      page: req.query.page || 1,
      query: q,
      pages,
      count,
      isVerified: req.auth.isVerified,
      profileImage: req.auth.profileImage,
      meta: { title, description }
    });
  } catch (error) {
    console.log(error)
    respondWithWarning(res, 500, 'Server error', error);
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
      return respondWithSuccess(
        res, 200, 'Invites found', invites
      );
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
    // media: req.body.media || req.invite.media, //No more file upload.
  };

  try {
    const invite = await updateOneInvite(inviteId, toUpdate);

    respondWithSuccess(
      res, 200, 'Job Invite updated successfully', invite
    );
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
  await deleteOneInvite({ inviteId });
  respondWithSuccess(res, 200, `${title} deleted successfully`);
};

/**
 * Get upvotes for Invite
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const fetchVoteCount = async (req, res) => {
  const { inviteId } = req.invite;
  const { userId } = req.auth;

  await fetchOneVoteCount(inviteId, userId)
    .then((votes) => respondWithSuccess(
      res, 200, 'Successfully fetched all votes', votes
    ))
    .catch((error) => respondWithSuccess(
      res, error.status, error.message, JSON.stringify(error)
    ));
};

/**
 * Upvote Invite
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const upvoteInvite = async (req, res) => {
  const { inviteId } = req.invite;
  const { userId } = req.auth;

  await upvoteOneInvite(res, userId, inviteId)
    .then((vote) => respondWithSuccess(
      res, 200, 'Upvote successful', vote
    ))
    .catch((error) => respondWithSuccess(
      res, error.status, error.message, JSON.stringify(error)
    ));
};

/**
 * Downvote Invite
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const downvoteInvite = async (req, res) => {
  const { inviteId } = req.invite;
  const { userId } = req.auth;

  await downVoteOneInvite(res, userId, inviteId)
    .then((vote) => respondWithSuccess(
      res, 200, 'Downvote successful', vote
    ))
    .catch((error) => respondWithSuccess(
      res, error.status, error.message, JSON.stringify(error)
    ));
};

export const unvoteInvite = async (req, res) => {
  const { inviteId } = req.invite;
  const { userId } = req.auth;

  await unvoteOneInvite(userId, inviteId)
    .then((vote) => {
      respondWithSuccess(res, 200, 'Upvote is deleted');
    })
    .catch((error) => respondWithSuccess(
      res, 200, 'Deletion failed', JSON.stringify(error)
    ));
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
    fetchOneInvite({ inviteId })
  ]);


  // Invite
  const title = `${data[1].title} - Is This A Real Job?`;
  const description = data[1].body.length > 80 ? data[1].body.substr(0, 80) : data[1].body;

  return res.render('singlepost', {
    comments: data[0],
    invite: data[1],
    user: data[1].user,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    userId: req.auth.userId,
    profileImage: req.auth.profileImage,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    meta: { title, description }
  });
};

/**
 * Render job invites page
 * @param {object} req
 * @param {object} res
 */
export const renderJobInvitesPage = async (req, res) => {
  const limit = 15;
  let page;

  if (req.query.page === 1 || req.query.page === 0 || !req.query.page) {
    page = 0;
  } else {
    page = Number(req.query.page) - 1;
  }

  const offset = page * limit;
  const { invites, count } = await fetchAllInvites({}, offset, limit);

  // console.log('Offset, Page, Limit =>', offset, page, limit);

  const pages = Math.ceil(count / limit);

  const title = `${offset} - ${offset + limit} Posts - Is This A Real Job`;
  const description = 'Browse the Job Invites on Is This A Real Job; don\'t go for that interview until you verify it!';

  return res.render('jobInvites', {
    // user,
    username: req.auth.username,
    name: req.auth.name,
    profileImage: req.auth.profileImage,
    invites: invites || [],
    page: req.query.page || 1,
    pages,
    count,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    userId: req.auth.userId,
    isVerified: req.auth.isVerified,
    meta: { title, description }
  });
};

export const renderHomePage = async (req, res) => {
  const invites = await fetchAllInvitesWithLimit(3);

  return res.render('index', {
    invites: invites || [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    isVerified: req.auth.isVerified,
    profileImage: req.auth.profileImage,
    meta: { title: 'Is This A Real Job', description: 'Our app helps you check if job opportunities are real or not.' }
  });
};

/**
 * Render job invites page for admin
 * @param {object} req
 * @param {object} res
 */
export const renderAdminJobInvitesPage = async (req, res) => {
  const limit = 15;
  let page;

  if (req.query.page === 1 || req.query.page === 0 || !req.query.page) {
    page = 0;
  } else {
    page = Number(req.query.page) - 1;
  }

  const offset = page * limit;
  const { invites, count } = await fetchAllInvites({}, offset, limit);

  // console.log('Offset, Page, Limit =>', offset, page, limit);

  const pages = Math.ceil(count / limit);

  const title = `${offset} - ${offset + limit} Posts - Is This A Real Job`;
  const description = 'Browse the Job Invites on Is This A Real Job; don\'t go for that interview until you verify it!';

  return res.render('admin/posts', {
    invites: invites || [],
    page: req.query.page || 1,
    pages,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    profileImage: req.auth.profileImage,
    name: req.auth.name,
    userId: req.auth.userId,
    isVerified: req.auth.isVerified,
    meta: { title, description }
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
      user: req.user,
      isVerified: req.auth.isVerified,
    });
  }

  const title = `Edit: ${req.invite.title} - Is This A Real Job?`;
  const description = req.invite.body.length > 80 ? req.invite.body.substr(0, 80) : req.invite.body;

  return res.render('editPost', {
    invite: req.invite,
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    profileImage: req.auth.profileImage,
    user: req.user,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    meta: { title, description }
  });
};

/**
 * Render invite analysis page
 * @param {object} req
 * @param {object} res
 */
export const renderInviteAnalysisPage = async (req, res) => {
  const { inviteId } = req.params;

  const invite = await fetchOneInvite({ inviteId });
  if (!invite) {
    return res.render('404', {
      isAuth: req.isAuth,
      isAdmin: req.auth.isAdmin,
      user: req.user,
      isVerified: req.auth.isVerified,
      profileImage: req.auth.profileImage,
    });
  }

  const title = `Analyze: ${invite.title} - Is This A Real Job ?`;
  const description = 'Browse the Job Invites on Is This A Real Job; don\'t go for that interview until you verify it!';

  return res.render('analyse', {
    invite: invite || [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    profileImage: req.auth.profileImage,
    meta: { title, description }
  });
};

/**
 * Render invite analysis page
 * @param {object} req
 * @param {object} res
 */
export const renderAnalysisPage = async (req, res) => {
  const title = 'Analyze - Is This A Real Job ?';
  const description = 'Browse the Job Invites on Is This A Real Job; don\'t go for that interview until you verify it!';

  return res.render('analyse', {
    invite: [],
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    profileImage: req.auth.profileImage,
    meta: { title, description }
  });
};
