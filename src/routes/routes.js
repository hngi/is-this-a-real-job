import { signin, signup } from '../controllers/authController';
import {
  validateSigninFormData,
  validateSignupFormData,
  validUser,
  validateCommentData,
  validateInvite,
  validateInviteId,
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput
} from '../middlewares/middlewares';

import { getComments, createComment } from '../controllers/commentController';
import { deleteInvite, upvoteInvite } from '../controllers/inviteController';
import { blockUser, getUsers } from '../controllers/userController';

export const initRoutes = app => {
  // All EJS frontend endpoints below --------------------------------------------------
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/post', (req, res) => res.render('userPost'));


  // All backend endpoints below -----------------------------------------------------

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  // get all Users
  app.get('/api/v1/users', authenticateUserToken, validateAdmin, getUsers);

  // block a user
  app.patch('/api/v1/users/block/:userId', validateUserId, authenticateUserToken, validateAdmin, validateUserById, blockUser);

  app.post(
    '/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUser,
    signup
  );
  app.get('/api/v1/comments/:inviteId', validateInviteId, getComments);

  app.patch('/api/v1/invites/upvote/:inviteId/:voteType', validateUpvoteInput, validateInvite, upvoteInvite);
  app.post('/api/v1/comments/:inviteId', validateInviteId, authenticateUserToken, validateCommentData, createComment);

  app.delete('/api/v1/invites/:inviteId', validateInviteId, authenticateUserToken, validateAdmin, validateInvite, deleteInvite);

  app.all('*', (req, res) => res.status(404).json({ message: 'Route Not Found' }));
};
