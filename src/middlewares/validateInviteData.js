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
export const validateinviteData = (req, res, next) => {
  const inviteSchema = Joi.object().keys({
    body: Joi.string().required().trim(),
    userId: Joi.string().required()
  });

  const errors = joiValidator(req.body, inviteSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Input', errors);
};
