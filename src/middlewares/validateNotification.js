import Joi from '@hapi/joi';
import {
  joiValidator
} from '../helpers/joiValidator';
import {
  respondWithWarning
} from '../helpers/responseHandler';
import {
  VALID_UUID
} from '../config/constants';

/**
 * validate comment entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateNotificationData = (req, res, next) => {
  const { type } = req.query;

  const schemaMap = {
    target: Joi.string().pattern(VALID_UUID).required().trim()
  };

  if (!type) {
    return respondWithWarning(res, 400, 'Query param \'type\' must be specified.');
  }

  if (type === 'comment') {
    schemaMap.commentId = Joi.string().required().trim();
  }

  const notificationSchema = Joi.object().keys(schemaMap);

  const errors = joiValidator(req.body, notificationSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Input', errors);
};
