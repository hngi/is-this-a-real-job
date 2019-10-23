import Joi from '@hapi/joi';

/**
* @param {Object} data
* @param {Joi.Schema} schema
* @param {Function} next
* @returns {Function} next middleware
*/
export const joiValidator = (data, schema) => {
  let message;
  const validationOptions = {
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true, // remove unknown keys from the validated data
    abortEarly: false // validate all inputs befor flagging error
  };
  const { error, value } = schema.validate(data, validationOptions);
  if (error) {
    message = error.details.map(items => items.message.replace(/['"]/g, ''));
  }
  return message;
};
