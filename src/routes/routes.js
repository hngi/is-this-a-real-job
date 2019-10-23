import {
  validateSigninFormData, validUser, validateCommentData
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import {
  getComments, createComment
} from '../controllers/commentController';
import { authenticateUserToken } from '../middlewares/authentication';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  app.get('/api/v1/comments/:inviteId', getComments);
  app.post('/api/v1/comments/:inviteId', authenticateUserToken, validateCommentData, createComment);

  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
