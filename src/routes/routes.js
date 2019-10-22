import {
  validateSigninFormData, validUser
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';

const getUsers = require('../middlewares/getUsers') // import from middleware

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);

  //get all Users  
   // must be a valid user, must be signed in also must be an admin
  app.get('/api/v1/users', /*validUser, signin, isAdmin,*/ getUsers); 



  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
