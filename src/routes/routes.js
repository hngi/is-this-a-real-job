import { signin, signup } from '../controllers/authController';
import {
  validateSigninFormData,
  validateSignupFormData,
  validateCommentData,
  validUser,
  validateInvite,
  validateInviteId,
  validateInviteData,
  validateInviteUpdateData,
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput,
  validateInviteOwner
} from '../middlewares/middlewares';

import {
  deleteInvite,
  upvoteInvite,
  saveNewInvite,
  getOneInvite,
  getAllInvites,
  updateInvite,
  renderSinglePostPage,
  renderJobInvitesPage,
  editInvite,
  renderAdminJobInvitesPage
} from '../controllers/inviteController';

import { getComments, createComment } from '../controllers/commentController';
import {
  blockUser,
  getUsers,
  renderAdminUsersPage,
  getUser,
  renderUserProfile
} from '../controllers/userController';
import { getNotifications, createNotification } from '../controllers/notificationController';
import { validateNotificationData } from '../middlewares/validateNotification';

export const initRoutes = app => {
  // All EJS frontend endpoints below --------------------------------------------------

  app.get('/', (req, res) => res.render('index', { isAuth: false })); // Pass true or false to toggle state of navbar....
  app.get('/login', (req, res) => res.render('login', { isAuth: false }));
  app.get('/register', (req, res) => res.render('register', { isAuth: false }));
  app.get('/post', (req, res) => res.render('userPost', { isAuth: true }));
  app.get('/howitworks', (req, res) => res.render('howitworks', { isAuth: false }));
  app.get('/jobInvites', renderJobInvitesPage);
  app.get('/post/:inviteId', renderSinglePostPage);
  app.get('/admin/reported', (req, res) => res.render('admin/reportedUsers', { isAuth: true, }));


  // Edit post endpoint
  app.get('/post/:inviteId/edit', validateInviteId, validateInvite, editInvite);

  app.get('/admin/users', renderAdminUsersPage);
  app.get('/admin/posts', renderAdminJobInvitesPage);

  // All backend API endpoints below -----------------------------------------------------
  // Auth
  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  app.post(
    '/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUser,
    signup
  );

  // Get all Users
  app.get('/api/v1/users', authenticateUserToken, validateAdmin, getUsers);

  // Get single User - return JSON
  app.get('/api/v1/users/json/:username', getUser);

  // Render user profile
  app.get('/api/v1/users/:username', renderUserProfile);

  // Block a user
  app.patch(
    '/api/v1/users/block/:userId',
    validateUserId,
    authenticateUserToken,
    validateAdmin,
    validateUserById,
    blockUser
  );

  // Post a new job invite.
  app.post(
    '/api/v1/invites',
    validateInviteData,
    authenticateUserToken,
    saveNewInvite
  );

  // Get all job invites in the database.
  app.get('/api/v1/invites', getAllInvites);

  // Get a single job invite.
  app.get('/api/v1/invites/:inviteId', validateInviteId, getOneInvite);

  // Update an existing job invite.
  app.put(
    '/api/v1/invites/:inviteId',
    validateInviteUpdateData,
    validateInviteId,
    authenticateUserToken,
    validateInvite,
    validateInviteOwner,
    updateInvite
  );

  // Delete an existing job invite.
  app.delete(
    '/api/v1/invites/:inviteId',
    validateInviteId,
    authenticateUserToken,
    validateAdmin,
    validateInvite,
    deleteInvite
  );

  // Get all comments for a given Invite.
  app.get('/api/v1/comments/:inviteId', validateInviteId, getComments);

  // Post a comment on a specific Invite.
  app.post(
    '/api/v1/comments/:inviteId',
    validateCommentData,
    validateInviteId,
    authenticateUserToken,
    validateInvite,
    createComment
  );

  // Upvote/Downvote a specific Invite.
  app.patch(
    '/api/v1/invites/upvote/:inviteId/:voteType',
    validateUpvoteInput,
    validateInvite,
    upvoteInvite
  );

  app.get('/api/v1/notifications/:userId', validateUserId, getNotifications);
  app.post('/api/v1/notifications', validateNotificationData, createNotification);

  // Fallback case for unknown URIs.
  app.all('*', (req, res) => res.status(404).json({ message: 'Route Not Found' }));
};
