import Joi from '@hapi/joi';
import { config, uploader } from 'cloudinary';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';

/**
 * validate invite entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateInviteData = (req, res, next) => {
  const inviteSchema = Joi.object().keys({
    title: Joi.string().required().trim(),
    body: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    company: Joi.string().required().trim()
  });

  const errors = joiValidator(req.body, inviteSchema);

  if (!errors) {
    return next();
  }

  // potential bug: media still gets uploaded to cloudinary even when post creation fails
  return respondWithWarning(
    res, 400, 'Bad Input', errors
  );
};

/**
 * validate invite update entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateInviteUpdateData = (req, res, next) => {
  const inviteSchema = Joi.object().keys({
    title: Joi.string().trim(),
    body: Joi.string().trim(),
    company: Joi.string().trim(),
    location: Joi.string().trim(),
    userId: Joi.forbidden(),
    inviteId: Joi.forbidden(),
  });

  const errors = joiValidator(req.body, inviteSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(
    res, 400, 'Bad Input', errors
  );
};
