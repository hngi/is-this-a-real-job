import { signin, signup } from '../controllers/authController';
import { validateSigninFormData,
  validateSignupFormData,
  validateCommentData,
  validUser,
  validateInvite,
  validateInviteId,
  validateInviteData,
  validateInviteUpdateData,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput,
  validateInviteOwner,
  twitterAuthCallback,
  twitterAuthenticate,
  googleAuthenticate,
  googleAuthCallback,
  facebookAuthenticate,
  facebookAuthCallback,
  multerUploads,
  verifyUniqueUserUsername,
  verifyUniqueUserEmail,
  validateForgotPasswordForm,
  validateUserByEmail,
  authenticateForgotToken,
  checkUserPasswordReset,
  validateNewPasswordForm,
  validateUserByUsername,
  authenticateVerifyEmailToken, } from '../middlewares/middlewares';

import { deleteInvite,
  saveNewInvite,
  getOneInvite,
  getAllInvites,
  updateInvite,
  renderSinglePostPage,
  renderJobInvitesPage,
  renderSearchResults,
  searchInvitesApi,
  renderEditInvitePage,
  renderAdminJobInvitesPage,
  upvoteInvite,
  downvoteInvite,
  unvoteInvite,
  fetchVoteCount,
  renderInviteAnalysisPage,
  renderHomePage,
  renderAnalysisPage } from '../controllers/inviteController';

import { getComments, createComment, deleteComment } from '../controllers/commentController';
import { blockUser,
  getUsers,
  renderAdminUsersPage,
  getUser,
  renderUserProfile,
  getUserByUserId,
  renderAdminReportedUsersPage,
  checkRenderIsAdmin,
  checkRenderIsAuth,
  renderLoginPage,
  renderReportUserPage,
  forgotPassowrd,
  resetForgotPassword,
  checkUserVerification,
  sendUserVerification,
  verifyEmailLink, } from '../controllers/userController';
import { getNotifications, markNotificationAsRead } from '../controllers/notificationController';
import { validateCookies,
  signUserIn,
  signUserOut } from '../middlewares/cookieHandler';
import { getMetrics } from '../controllers/metricsController';

import { descriptions } from '../helpers/metatags';
import { validateReport } from '../middlewares/validateReport';
import { createReport } from '../controllers/reportController';
import { checkIfSameUser } from '../middlewares/validateUser';
import { canDeleteComment, validateComment } from '../middlewares/validateComment';

const genericDescription = 'Our app helps you check if job opportunities are real or not.';

export const initRoutes = app => {
  // Cookie handlers before all
  app.use(validateCookies);
  app.use(signUserIn);
  app.use(signUserOut);

  // All EJS frontend routess below --------------------------------------------------
  app.get('/', renderHomePage);
  app.get('/login', checkRenderIsAuth, renderLoginPage);
  app.get('/register', checkRenderIsAuth, (req, res) => res.render('register', { isAuth: req.isAuth, isAdmin: req.auth.isAdmin, meta: { title: 'Register - Is This A Real Job', description: descriptions.register } }));

  app.get('/post',
    getUserByUserId, (req, res) => res.render('userPost', {
      isAuth: req.isAuth,
      isAdmin: req.auth.isAdmin,
      user: req.user,
      username: req.auth.username,
      profileImage: req.auth.profileImage,
      name: req.auth.name,
      isVerified: req.auth.isVerified,
      meta: { title: 'New Post - Is This A Real Job', descripiton: genericDescription }
    }));

  app.get(
    '/verify/:token', authenticateVerifyEmailToken, validateUserById, verifyEmailLink
  );
  app.get('/howitworks', (req, res) => res.render('howitworks', {
    isAuth: req.isAuth, isAdmin: req.auth.isAdmin, isVerified: req.auth.isVerified, meta: { title: 'How It Works - Is This A Real Job', description: genericDescription }
  }));
  app.get('/analyse/:inviteId', renderInviteAnalysisPage);
  app.get('/analyse', renderAnalysisPage);
  app.get('/posts', renderJobInvitesPage);
  app.get('/post/:inviteId', renderSinglePostPage);

  app.get('/terms', (req, res) => res.render('terms', {
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    profileImage: req.auth.profileImage,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    meta: { title: 'Terms - Is This A Real Job', description: genericDescription }
  }));

  app.get('/about', (req, res) => res.render('about', {
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    profileImage: req.auth.profileImage,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    meta: { title: 'About - Is This A Real Job', description: genericDescription }
  }));
  app.get(
    '/reportuser/:username', validateUserByUsername, checkIfSameUser, renderReportUserPage
  );
  app.get('/users/:username', renderUserProfile);
  app.get('/admin/reportedusers', checkRenderIsAdmin, renderAdminReportedUsersPage);
  // Search Invites - Renders view
  app.get('/invites/search', renderSearchResults);
  app.get('/admin', checkRenderIsAdmin, (req, res) => res.render('./admin/index', {
    isAuth: req.isAuth,
    username: req.auth.username,
    profileImage: req.auth.profileImage,
    name: req.auth.name,
    isAdmin: req.auth.isAdmin,
    isVerified: req.auth.isVerified,
    meta: { title: 'Admin Home - Is This A Real Job', description: genericDescription }
  }));

  app.get('/forgotpassword', (req, res) => res.render('forgotPassword', {
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    token: 'expired',
    meta: { title: 'Forgot Password - Is This A Real Job', description: genericDescription }
  }));

  app.get('/linkexpired', (req, res) => res.render('linkExpired', {
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    meta: { title: 'Expired Link- Is This A Real Job', description: genericDescription }
  }));

  app.get('/verificationLinkExpired', (req, res) => res.render('verificationLinkExpired', {
    isAuth: req.isAuth,
    isAdmin: req.auth.isAdmin,
    username: req.auth.username,
    name: req.auth.name,
    isVerified: req.auth.isVerified,
    meta: { title: 'Expired Link- Is This A Real Job', description: genericDescription }
  }));

  // password reset link from email
  app.get(
    '/users/reset-password/:token',
    authenticateForgotToken,
    validateUserById,
    checkUserPasswordReset,
    (req, res) => res.render('resetPassword', {
      token: req.params.token,
      isAuth: req.isAuth,
      isAdmin: req.auth.isAdmin,
      username: req.auth.username,
      name: req.auth.name,
      isVerified: req.auth.isVerified,
      meta: { title: 'Reset Password - Is This A Real Job', description: genericDescription }
    })
  );

  // Resend verification email
  app.get('/resendVerification',
    authenticateUserToken,
    sendUserVerification);

  // Edit post endpoint
  app.get(
    '/post/:inviteId/edit',
    validateInviteId,
    validateInvite,
    getUserByUserId,
    renderEditInvitePage
  );

  app.get('/admin/users', checkRenderIsAdmin, renderAdminUsersPage);
  app.get('/admin/posts', checkRenderIsAdmin, renderAdminJobInvitesPage);

  // All backend API endpoints below -----------------------------------------------------
  // Auth
  app.post(
    '/api/v1/auth/signin', validateSigninFormData, validUser, signin
  );
  app.post(
    '/api/v1/auth/signup',
    validateSignupFormData,
    verifyUniqueUserEmail,
    verifyUniqueUserUsername,
    signup
  );


  // Twitter Auth
  app.get('/auth/twitter', twitterAuthenticate);
  app.get('/auth/twitter/redirect', twitterAuthCallback);

  // Google Auth
  app.get('/auth/google', googleAuthenticate);
  app.get('/auth/google/redirect', googleAuthCallback);

  // Facebook Auth
  app.get('/auth/facebook', facebookAuthenticate);
  app.get('/auth/facebook/redirect', facebookAuthCallback);


  // Get all Users
  app.get(
    '/api/v1/users', authenticateUserToken, validateAdmin, getUsers
  );

  // Get single User - return JSON
  app.get('/api/v1/users/json/:username', getUser);


  // Block a user
  app.patch(
    '/api/v1/users/block/:userId',
    validateUserId,
    authenticateUserToken,

    validateAdmin,
    validateUserById,
    blockUser
  );

  // Post a new job invite.
  app.post(
    '/api/v1/invites',
    authenticateUserToken,
    checkUserVerification,
    // multerUploads, //No more file upload.
    validateInviteData,
    saveNewInvite
  );

  // Get all job invites in the database.
  app.get('/api/v1/invites', getAllInvites);

  // Search Invites - Returns JSON payload
  app.get('/api/v1/invites/search/json', searchInvitesApi);

  // Get a single job invite.
  app.get('/api/v1/invites/:inviteId', validateInviteId, getOneInvite);

  // Update an existing job invite.
  app.put(
    '/api/v1/invites/:inviteId',
    validateInviteUpdateData,
    validateInviteId,
    authenticateUserToken,
    checkUserVerification,
    validateInvite,
    validateInviteOwner,
    updateInvite
  );

  // Delete an existing job invite.
  app.delete(
    '/api/v1/invites/:inviteId',
    validateInviteId,
    authenticateUserToken,
    checkUserVerification,
    validateAdmin,
    validateInvite,
    deleteInvite
  );

  // Delete an existing comment.
  app.delete(
    '/api/v1/comments/:inviteId/:commentId',
    authenticateUserToken,
    validateComment,
    canDeleteComment,
    deleteComment
  );

  // Get all comments for a given Invite.
  app.get('/api/v1/comments/:inviteId', validateInviteId, getComments);

  // Post a comment on a specific Invite.
  app.post(
    '/api/v1/comments/:inviteId',
    validateCommentData,
    validateInviteId,
    authenticateUserToken,
    checkUserVerification,
    validateInvite,
    createComment
  );

  // New Upvote stuff
  app.get(
    '/api/v1/invites/:inviteId/votes',
    validateInviteId,
    validateInvite,
    fetchVoteCount
  );

  app.patch(
    '/api/v1/invites/:inviteId/upvote',
    authenticateUserToken,
    checkUserVerification,
    validateInviteId,
    validateInvite,
    upvoteInvite
  );

  app.patch(
    '/api/v1/invites/:inviteId/downvote',
    authenticateUserToken,
    checkUserVerification,
    validateInviteId,
    validateInvite,
    downvoteInvite
  );

  app.delete(
    '/api/v1/invites/:inviteId/vote',
    authenticateUserToken,
    checkUserVerification,
    validateInviteId,
    validateInvite,
    unvoteInvite
  );

  // Get the number of users, invites and comments in the database.
  app.get('/api/v1/metrics', getMetrics);

  // Get all notifications for a given User.
  app.get('/api/v1/notifications', authenticateUserToken, getNotifications);

  // Create a new notification
  // app.post('/api/v1/notifications', validateNotificationData, createNotification);
  app.get('/api/v1/notifications/:userId', validateUserId, getNotifications);

  // Mark a notification as read
  app.patch('/api/v1/notifications', markNotificationAsRead);

  // Report a user
  app.post(
    '/api/v1/users/report', authenticateUserToken, checkUserVerification, validateReport, createReport
  );

  // forgot password
  app.post(
    '/api/v1/users/forgot-password', validateForgotPasswordForm, validateUserByEmail, forgotPassowrd
  );

  // Reset forgot password
  app.patch(
    '/api/v1/users/reset-forgot-password/:token',
    validateNewPasswordForm,
    authenticateForgotToken,
    validateUserById,
    checkUserPasswordReset,
    resetForgotPassword
  );

  // Fallback case for unknown URIs.
  app.get('/notAuthorized', (req, res) => res.render('401', { meta: { title: '404 - Page Not Found', description: genericDescription } }));
  app.get('/forbiden', (req, res) => res.render('403', { meta: { title: '403 - Forbidden Route', description: genericDescription } }));
  app.all('*', (req, res) => res.render('404', { meta: { title: '404 - Page Not Found', description: genericDescription } }));
};
