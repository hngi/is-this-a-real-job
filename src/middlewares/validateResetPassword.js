import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';

/**
 * validate email field
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 * @returns {Object} error
 */
export const validateForgotPasswordForm = (req, res, next) => {
  const forgotPasswordSchema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required()
      .trim()
  });

  const errors = joiValidator(req.body, forgotPasswordSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(
    res, 400, 'Bad Input', errors
  );
};

/**
 * validate new password field
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback function
 * @returns {Object} error
 */
export const validateNewPasswordForm = (req, res, next) => {
  const forgotPasswordSchema = Joi.object().keys({ password: Joi.string().min(6).max(15).required(), });

  const errors = joiValidator(req.body, forgotPasswordSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(
    res, 400, 'Bad Input', errors
  );
};
