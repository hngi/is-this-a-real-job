import _ from 'lodash';
import { generateToken } from '../helpers/jwt';
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { comparePasswords } from '../helpers/hash';

/**
 * class handles user authentication
 */

/**
 * Login a user
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const signin = async (req, res) => {
  const { password } = req.body;
  const comparePassword = await comparePasswords(password, req.user.password);
  if (!comparePassword) {
    return respondWithWarning(res, 401, 'Incorrect email or password');
  }
  const { _id } = req.user;
  const payload = { _id };
  req.user.token = await generateToken(payload);
  return respondWithSuccess(res, 200, 'Login successful', _.omit(req.user, ['password']));
};
