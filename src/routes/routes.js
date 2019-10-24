import {
  validateSigninFormData, validUser, validateCommentData, validateInvite, validateInviteId,
  authenticateUserToken, validateAdmin, validateUserById, validateUserId
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import {
  getComments, createComment
} from '../controllers/commentController';
import { upvoteInvite } from '../controllers/upvoteController';
import { blockUser, getUsers } from '../controllers/userController';

export const initRoutes = app => {
  // All EJS frontend endpoints below --------------------------------------------------
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/post',(req, res) => res.render('userPost'));
  app.get("/admin", (req, res) => res.render('admin'));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  app.get('/post', (req, res) => res.render('userPost'));


  // All backend endpoints below -----------------------------------------------------

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);
  // get all Users
  app.get('/api/v1/users', authenticateUserToken, validateAdmin, getUsers);

  // block a user
  app.patch('/api/v1/users/block/:userId', validateUserId, authenticateUserToken, validateAdmin, validateUserById, blockUser);

  app.get('/api/v1/comments/:inviteId', getComments);
  app.post('/api/v1/comments/:inviteId', authenticateUserToken, validateCommentData, createComment);

  app.patch('/api/v1/invites/upvote/:inviteId', validateInviteId, validateInvite, upvoteInvite);

  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
