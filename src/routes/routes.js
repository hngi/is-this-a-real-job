import {
  validateSigninFormData, validUser, validateCommentData, validateInvite,
  validateUUID, validateAdmin, authenticateUserToken
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import {
  getComments, createComment
} from '../controllers/commentController';
import { authenticateUserToken } from '../middlewares/authentication';
import { upvoteInvite } from '../controllers/upvoteController';
import { deleteInvite } from '../controllers/inviteController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/post',(req, res) => res.render('userPost'));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);

  app.get('/api/v1/comments/:inviteId', getComments);
  app.post('/api/v1/comments/:inviteId', authenticateUserToken, validateCommentData, createComment);

  app.patch('/api/v1/invites/upvote/:inviteId', validateUUID, validateInvite, upvoteInvite);

  app.delete('/api/v1/invite/:inviteId', authenticateUserToken, validateAdmin, validateInvite, deleteInvite);


  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
