import { signin, signup } from '../controllers/authController';
import {
  validateSigninFormData,
  validateSignupFormData,
  validateCommentData,
  validUser,
  validateInvite,
<<<<<<< HEAD
=======
  validateInviteId,
>>>>>>> upstream/develop
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput
} from '../middlewares/middlewares';

import { getComments, createComment } from '../controllers/commentController';
<<<<<<< HEAD
import { upvoteInvite } from '../controllers/upvoteController';
import { deleteInvite } from '../controllers/inviteController';
=======
import { deleteInvite, upvoteInvite } from '../controllers/inviteController';
>>>>>>> upstream/develop
import { blockUser, getUsers } from '../controllers/userController';

export const initRoutes = app => {
  // All EJS frontend endpoints below --------------------------------------------------
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/login', (req, res) => res.render('login'));
  app.get('/register', (req, res) => res.render('register'));
  app.get('/post', (req, res) => res.render('userPost'));
  app.get('/jobInvites', (req, res) => res.render('jobInvites'));


  // All backend endpoints below -----------------------------------------------------

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  // get all Users
  app.get('/api/v1/users', authenticateUserToken, validateAdmin, getUsers);

  // block a user
<<<<<<< HEAD
  app.patch(
    '/api/v1/users/block/:userId',
    validateUserId,
    authenticateUserToken,
    validateAdmin,
    validateUserById,
    blockUser
  );
=======
  app.patch('/api/v1/users/block/:userId', validateUserId, authenticateUserToken, validateAdmin, validateUserById, blockUser);

>>>>>>> upstream/develop
  app.post(
    '/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUser,
    signup
  );
  app.get('/api/v1/comments/:inviteId', validateInvite, getComments);

<<<<<<< HEAD
  app.patch('/api/v1/invites/upvote/:inviteId', validateInvite, upvoteInvite);
  app.post(
    '/api/v1/comments/:inviteId',
    validateInvite,
    authenticateUserToken,
    validateCommentData,
    createComment
  );
=======
  app.patch('/api/v1/invites/upvote/:inviteId/:voteType', validateUpvoteInput, validateInvite, upvoteInvite);
  app.post('/api/v1/comments/:inviteId', validateInviteId, authenticateUserToken, validateCommentData, createComment);
>>>>>>> upstream/develop

  app.delete(
    '/api/v1/invites/:inviteId',
    validateInvite,
    authenticateUserToken,
    validateAdmin,
    deleteInvite
  );

  app.all('*', (req, res) => res.status(404).json({ message: 'Route Not Found' }));
};
