import {
  validateSigninFormData, validUser, validateInvite, validateAdmin, authenticateUserToken
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import { upvoteInvite } from '../controllers/upvoteController';
import { deleteInvite } from '../controllers/inviteController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);


  app.patch('/api/v1/invites/upvote/:inviteId', validateInvite, upvoteInvite);

  app.delete('/api/v1/invite/:inviteId', authenticateUserToken, validateAdmin, validateInvite, deleteInvite);


  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
