import {
  validateSigninFormData, validUser, validateInvite
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import { upvoteInvite } from '../controllers/upvoteController';
import { validateAdmin} from '../middlewares/validateAdmin'

import {authenticateUserToken} from '../middlewares/authentication'
import { findSingleUser } from '../services/userServices';
import { findValidUser } from '../services/blockUserServices';

const  {blockUser, getUsers} =  require('../controllers/userController') // import from middleware

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);

  //get all Users  
   // must be a valid user, must be signed in also must be an admin
  app.get('/api/v1/users', authenticateUserToken, getUsers); 

  //block a user
  app.patch('/api/v1/users/:id', findValidUser, authenticateUserToken, validateAdmin, blockUser)
  



  app.patch('/api/v1/invites/upvote/:inviteId', validateInvite, upvoteInvite);


  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
