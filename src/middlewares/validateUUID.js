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
export const validateUUID = (req, res, next) => {
  const validUUID = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
  const commentSchema = Joi.object().keys({
    inviteId: Joi.string().pattern(validUUID)
      .required(),
  });

  const errors = joiValidator(req.params, commentSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Request', errors);
};
