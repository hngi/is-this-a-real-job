import {
  validateSigninFormData,
  validateSignupFormData,
  validUser,
  validateInvite
} from '../middlewares/middlewares';
import { signin, signup } from '../controllers/authController';
import { upvoteInvite } from '../controllers/upvoteController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);

  app.post('/api/v1/auth/signup', validateSignupFormData, signup);

  app.patch('/api/v1/invites/upvote/:inviteId', validateInvite, upvoteInvite);

  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
