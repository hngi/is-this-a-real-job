import { signin, signup } from '../controllers/authController';
import {
  validateSigninFormData,
  validateSignupFormData,
  validUser,
  validateCommentData,
  validateInvite,
  validateInviteId,
  validateInviteData,
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput,
  validateUUID
} from '../middlewares/middlewares';

import { getComments, createComment } from '../controllers/commentController';
import { deleteInvite, upvoteInvite } from '../controllers/inviteController';
import { blockUser, getUsers } from '../controllers/userController';
import { getComments, createComment } from '../controllers/commentController';
import { authenticateUserToken } from '../middlewares/authentication';
import { upvoteInvite } from '../controllers/upvoteController';
import { saveNewInvite, getOneInvite, getAllInvites } from '../controllers/invitesController';

export const initRoutes = app => {
  //All EJS frontend endpoints below --------------------------------------------------
    app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
    app.get('/post', (req, res) => res.render('userPost'));

  //All backend API endpoints below -----------------------------------------------------
    // Auth
    app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
    app.post('/api/v1/auth/signup',
      validateSignupFormData,
      verifyUniqueUser,
      signup
    );

    // Get all Users
      app.get('/api/v1/users', authenticateUserToken, validateAdmin, getUsers);

    // Block a user
      app.patch('/api/v1/users/block/:userId', validateUserId, authenticateUserToken, validateAdmin, validateUserById, blockUser);

    // Post a new job invite.
      app.post('/api/v1/invites', authenticateUserToken, validateInviteData, saveNewInvite);

    // Get all job invites in the database.
      app.get('/api/v1/invites', getAllInvites);

    // Get a single job invite.
      app.get('/api/v1/invites/:inviteId', validateUUID, getOneInvite);

    // Delete an existing job invite.
      app.delete('/api/v1/invites/:inviteId', validateInviteId, authenticateUserToken, validateAdmin, validateInvite, deleteInvite);

    // Get all comments for a given Invite.
      app.get('/api/v1/comments/:inviteId', validateInviteId, getComments);

    // Post a comment on a specific Invite.
      app.post('/api/v1/comments/:inviteId', validateInviteId, authenticateUserToken, validateCommentData, createComment);
    
    // Upvote/Downvote a specific Invite.
      app.patch('/api/v1/invites/upvote/:inviteId/:voteType', validateUpvoteInput, validateInvite, upvoteInvite);

  //Fallback case for unknown URIs.
    app.all('*', (req, res) => res.status(404).json({ message: 'Route Not Found' }));
};
