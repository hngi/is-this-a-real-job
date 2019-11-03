import jwt from 'jsonwebtoken';
import { SECRET_KEY, EXPIRATION_DURATION } from '../config/constants';

/**
 * Function to generate token from userId and role
 * @param {object} data
 * @param {object} options
 * @returns {string} generated token
 */
export const generateToken = async (data, options = { expiresIn: EXPIRATION_DURATION }) => {
  const token = await jwt.sign({ key: data }, SECRET_KEY, options);
  return token;
};

/**
 * Verify a token
 * @param {object} token
 * @returns {Object} decoded data
 */

export const verifyToken = (token) => jwt.verify(token, SECRET_KEY);

/**
   * Verify a token
   * @param {object} token
   * @returns {Object} decoded data
   */

export const formatJWTErrorMessage = (message) => {
  let formattedMessage;
  if (message.includes('invalid') || message.includes('malformed')) {
    formattedMessage = 'Session is invalid. Signin to continue';
  }
  if (message.includes('expired')) {
    formattedMessage = 'Session has expired. Signin to continue';
  }
  return formattedMessage;
};
