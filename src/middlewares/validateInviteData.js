import Joi from '@hapi/joi';
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
    media: Joi.string().required().trim(),
    userId: Joi.string().required()
  });

  const errors = joiValidator(req.body, inviteSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Input', errors);
};
