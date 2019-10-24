import { signin, signup } from '../controllers/authController';
import {
  validateSigninFormData,
  validateSignupFormData,
  validUser,
  validateCommentData,
  validateInvite,
  validateUUID
} from '../middlewares/middlewares';

import { getComments, createComment } from '../controllers/commentController';
import {
  authenticateUserToken,
  verifyUniqueUser
} from '../middlewares/authentication';
import { upvoteInvite } from '../controllers/upvoteController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/post', (req, res) => res.render('userPost'));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);

  app.post(
    '/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUser,
    signup
  );
  app.get('/api/v1/comments/:inviteId', getComments);
  app.post(
    '/api/v1/comments/:inviteId',
    authenticateUserToken,
    validateCommentData,
    createComment
  );

  app.patch(
    '/api/v1/invites/upvote/:inviteId',
    validateUUID,
    validateInvite,
    upvoteInvite
  );

  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
