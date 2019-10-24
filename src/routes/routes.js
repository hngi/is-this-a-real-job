import {
  validateSigninFormData, validUser, validateCommentData, validateInviteData, validateInvite, validateUUID
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import {
  getComments, createComment
} from '../controllers/commentController';
import { authenticateUserToken } from '../middlewares/authentication';
import { upvoteInvite } from '../controllers/upvoteController';
import { saveNewInvite, getOneInvite, getAllInvites } from '../controllers/invitesController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/post',(req, res) => res.render('userPost'));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);

  app.get('/api/v1/comments/:inviteId', getComments);
  app.post('/api/v1/comments/:inviteId', authenticateUserToken, validateCommentData, createComment);
  
  app.post('/api/v1/invites', /*authenticateUserToken,*/ validateInviteData, saveNewInvite);
  app.get('/api/v1/invites', getAllInvites);
  app.get('/api/v1/invites/:inviteId', getOneInvite);

  app.patch('/api/v1/invites/upvote/:inviteId', validateUUID, validateInvite, upvoteInvite);


  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
