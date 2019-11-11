import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';
import { VALID_UUID } from '../config/constants';

/**
 * validate report entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateReport = (req, res, next) => {
  const reportSchema = Joi.object().keys({
    offender: Joi.string().pattern(VALID_UUID).required().trim(),
    offence: Joi.string().required().trim(),
    details: Joi.string().required().trim()
  });

  const errors = joiValidator(req.body, reportSchema);

  if (!errors) {
    return next();
  }

  return respondWithWarning(
    res, 400, 'Bad Input', errors
  );
};
