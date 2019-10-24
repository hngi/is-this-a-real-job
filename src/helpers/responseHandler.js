/**
 * Handles all http responses
 * @exports respondWithSuccess
 * @exports respondWithWarning
 */

/**
 * @param  {Object} res
 * @param  {Number} statusCode
 * @param  {String} message
 * @param {Object} additionalFields
 * @returns {Object} null
 */
export const respondWithSuccess = (
  res,
  statusCode = 200,
  message,
  additionalFields = {},
  token = ''
) => {
  const payload = Array.isArray(additionalFields)
    ? [...additionalFields]
    : { ...additionalFields };

  return res
    .status(statusCode)
    .send({ success: true, message, payload, token });
};

/**
 * @param  {Object} res
 * @param  {Number} statusCode
 * @param  {String} message
 * @param {Object} additionalFields
 * @returns {Object} null
 */
export const respondWithWarning = (
  res,
  statusCode = 500,
  message,
  additionalFields = {}
) => {
  const payload = Array.isArray(additionalFields)
    ? [...additionalFields]
    : { ...additionalFields };
  res.status(statusCode).send({ success: false, message, payload });
};
