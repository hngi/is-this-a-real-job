import { signin, signup } from '../controllers/authController';
import {
  validateSigninFormData,
  validateSignupFormData,
  validateCommentData,
  validUser,
  validateInvite,
  validateInviteId,
  validateInviteData,
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput
} from '../middlewares/middlewares';

import {
  deleteInvite,
  upvoteInvite,
  saveNewInvite,
  getOneInvite,
  getAllInvites
} from '../controllers/inviteController';

import { getComments, createComment } from '../controllers/commentController';
import { blockUser, getUsers } from '../controllers/userController';

export const initRoutes = app => {
  // All EJS frontend endpoints below --------------------------------------------------
  app.get('/', (req, res) => res.render('index'));
  app.get('/login', (req, res) => res.render('login'));
  app.get('/register', (req, res) => res.render('register'));
  app.get('/post', (req, res) => res.render('userPost'));
  app.get('/jobInvites', (req, res) => res.render('jobInvites'));
  app.get('/singlepost', (req, res) => res.render('singlepost'));
  app.get('/admin', (req, res) => res.render('admin'));

<<<<<<< HEAD
  // All backend endpoints below -----------------------------------------------------

=======
  // All backend API endpoints below -----------------------------------------------------
  // Auth
>>>>>>> upstream/develop
  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  app.post('/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUser,
    signup);

  // Get all Users
  app.get('/api/v1/users', authenticateUserToken, validateAdmin, getUsers);

<<<<<<< HEAD
  // block a user
  app.patch(
    '/api/v1/users/block/:userId',
    validateUserId,
    authenticateUserToken,
    validateAdmin,
    validateUserById,
    blockUser
  );

  app.post(
    '/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUser,
    signup
  );
  app.get('/api/v1/comments/:inviteId', validateInvite, getComments);

  app.patch(
    '/api/v1/invites/upvote/:inviteId/:voteType',
    validateUpvoteInput,
    validateInvite,
    upvoteInvite
  );
  app.post(
    '/api/v1/comments/:inviteId',
    validateInviteId,
    authenticateUserToken,
    validateCommentData,
    createComment
  );

  app.delete(
    '/api/v1/invites/:inviteId',
    validateInvite,
    authenticateUserToken,
    validateAdmin,
    deleteInvite
  );
=======
  // Block a user
  app.patch('/api/v1/users/block/:userId', validateUserId, authenticateUserToken, validateAdmin, validateUserById, blockUser);

  // Post a new job invite.
  app.post('/api/v1/invites', authenticateUserToken, validateInviteData, saveNewInvite);

  // Get all job invites in the database.
  app.get('/api/v1/invites', getAllInvites);

  // Get a single job invite.
  app.get('/api/v1/invites/:inviteId', validateInviteId, getOneInvite);

  // Delete an existing job invite.
  app.delete('/api/v1/invites/:inviteId', validateInviteId, authenticateUserToken, validateAdmin, validateInvite, deleteInvite);

  // Get all comments for a given Invite.
  app.get('/api/v1/comments/:inviteId', validateInviteId, getComments);

  // Post a comment on a specific Invite.
  app.post('/api/v1/comments/:inviteId', validateInviteId, authenticateUserToken, validateCommentData, createComment);

  // Upvote/Downvote a specific Invite.
  app.patch('/api/v1/invites/upvote/:inviteId/:voteType', validateUpvoteInput, validateInvite, upvoteInvite);
>>>>>>> upstream/develop

  // Fallback case for unknown URIs.
  app.all('*', (req, res) => res.status(404).json({ message: 'Route Not Found' }));
};
