/* eslint-disable no-useless-escape */
import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';
import { VALID_UUID } from '../config/constants';

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateInviteId = (req, res, next) => {
  const commentSchema = Joi.object().keys({
    inviteId: Joi.string()
      .pattern(VALID_UUID)
      .required()
  });

  const errors = joiValidator(req.params, commentSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Request', errors);
};

export const validateUserId = (req, res, next) => {
  const schema = Joi.object().keys({
    userId: Joi.string()
      .pattern(VALID_UUID)
      .required()
  });

  const errors = joiValidator(req.params, schema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Request', errors);
};

/**
* @param {Object} req
* @param {Object} res
* @param {Object} res
* @param {Function} next
* @returns {Object} error
*/
export const validateUpvoteInput = (req, res, next) => {
  const commentSchema = Joi.object().keys({
    inviteId: Joi.string().pattern(VALID_UUID)
      .required(),
    voteType: Joi.boolean().required(),
  });

  const errors = joiValidator(req.params, commentSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Request', errors);
};
