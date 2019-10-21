import {
  validateSigninFormData, validUser
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);


  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
