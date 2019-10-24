/* eslint-disable no-useless-escape */
import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateInviteId = (req, res, next) => {
  const validUUID = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
  const commentSchema = Joi.object().keys({
    inviteId: Joi.string()
      .pattern(validUUID)
      .required(),
  });

  const errors = joiValidator(req.params, commentSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Request', errors);
};

export const validateUserId = (req, res, next) => {
  const validUUID = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
  const schema = Joi.object().keys({
    userId: Joi.string()
      .pattern(validUUID)
      .required(),
  });

  const errors = joiValidator(req.params, schema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Request', errors);
};
