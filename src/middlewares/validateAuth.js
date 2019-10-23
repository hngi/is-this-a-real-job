import Joi from "@hapi/joi";
import { joiValidator } from "../helpers/joiValidator";
import { respondWithWarning } from "../helpers/responseHandler";

/**
 * validate email and password
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateSigninFormData = (req, res, next) => {
  const createSignInSchema = Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
      .trim()
  });

  const errors = joiValidator(req.body, createSignInSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, "Bad Input", errors);
};

export const validateSignupFormData = async (req, res, next) => {
  const { username, name, email, password } = req.body;
  const signUpSchema = Joi.object().keys({
    password: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
      .trim(),
    name: Joi.string().required()
  });

  const validationOptions = {
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true, // remove unknown keys from the validated data
    abortEarly: false // validate all inputs before flagging error
  };

  const { errors } = await signUpSchema.validate(
    { username, name, email, password },
    validationOptions
  );

  console.log("Errors", errors);

  if (errors) {
    message = error.details.map(items => items.message.replace(/['"]/g, ""));
    return respondWithWarning(res, 400, "Bad Signup Input" + message);
  } else {
    next();
  }
};
