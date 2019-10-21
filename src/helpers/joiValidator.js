
/**
* @param {Object} data
* @param {Object} schema
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
  schema.validate(data, validationOptions, (error) => {
    if (error) {
      message = error.details.map(items => items.message.replace(/['"]/g, ''));
    }
  });
  return message;
};
