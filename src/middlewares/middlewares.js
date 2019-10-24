import { validateSigninFormData, validateSignupFormData } from './validateAuth';
import {
  validUser,
  verifyUniqueUser,
  authenticateUserToken
} from './authentication';
import { validateCommentData } from './validateComment';
import { validateInvite } from './validateInvite';
<<<<<<< HEAD
import { validateUserId } from './validateUUID';
=======
import { validateInviteId, validateUserId, validateUpvoteInput } from './validateUUID';
import { validateAdmin } from './validateAdmin';
>>>>>>> upstream/develop
import { validateUserById } from './validateUser';
import { validateAdmin } from './validateAdmin';

export {
  validateSigninFormData,
  validateSignupFormData,
  validUser,
  validateCommentData,
  validateInvite,
<<<<<<< HEAD
  validateUserId,
  validateUserById,
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin
=======
  validateInviteId,
  verifyUniqueUser,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput,
>>>>>>> upstream/develop
};
