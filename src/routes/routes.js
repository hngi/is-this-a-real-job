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
  validateInviteOwner,
  validateNotification,
  validateNotificationOwner
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
  editInvite
} from '../controllers/inviteController';
import {updateNotification} from '../controllers/notificationController';

import { getComments, createComment } from '../controllers/commentController';
import { blockUser, getUsers } from '../controllers/userController';
import { validateNotification, validateNotificationOwner } from '../middlewares/validateNotification';

export const initRoutes = app => {
  // All EJS frontend endpoints below --------------------------------------------------
  app.get('/', (req, res) => res.render('index', { isAuth: false })); // Pass true or false to toggle state of navbar....
  app.get('/login', (req, res) => res.render('login', { isAuth: false }));
  app.get('/register', (req, res) => res.render('register', { isAuth: false }));
  app.get('/post', (req, res) => res.render('userPost', { isAuth: true }));
  app.get('/jobInvites', renderJobInvitesPage);
  app.get('/post/:inviteId', renderSinglePostPage);

  // Edit post endpoint
  app.get('/post/:inviteId/edit', validateInviteId, validateInvite, editInvite);

  app.get('/admin/users', (req, res) => res.render('admin/users', { isAuth: true, isAdmin: true }));
  app.get('/admin/posts', (req, res) => res.render('admin/posts', { isAuth: true, isAdmin: true }));

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
    authenticateUserToken,
    validateInviteData,
    saveNewInvite
  );

  // Get all job invites in the database.
  app.get('/api/v1/invites', getAllInvites);

  // Get a single job invite.
  app.get('/api/v1/invites/:inviteId', validateInviteId, getOneInvite);

  // Update an existing job invite.
  app.put(
    '/api/v1/invites/:inviteId',
    authenticateUserToken,
    validateInviteId,
    validateInvite,
    validateInviteOwner,
    validateInviteUpdateData,
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
    validateInviteId,
    authenticateUserToken,
    validateCommentData,
    createComment
  );

  // Upvote/Downvote a specific Invite.
  app.patch(
    '/api/v1/invites/upvote/:inviteId/:voteType',
    validateUpvoteInput,
    validateInvite,
    upvoteInvite
  );
  //mark notification as Read
  app.patch('/api/v1/notification/:notificationId', 
    validateNotification,
    authenticateUserToken,
    validateNotificationOwner,
    updateNotification
  )
  // Fallback case for unknown URIs.
  app.all('*', (req, res) => res.status(404).json({ message: 'Route Not Found' }));
};
