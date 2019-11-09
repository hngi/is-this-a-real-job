import _ from 'lodash';
import { generateToken } from '../helpers/jwt';
import { respondWithWarning, respondWithSuccess } from '../helpers/responseHandler';
import { comparePasswords, passwordHash } from '../helpers/hash';
import { createUser } from '../services/userServices';
import { newUserVerificationEmail } from '../helpers/emailTemplates';
import { SITE_URL } from '../config/constants';
import { sendMail } from '../services/emailServices';

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
  const { userId, isAdmin } = req.user;
  const payload = { userId, isAdmin };
  req.user.token = await generateToken(payload);
  return respondWithSuccess(
    res,
    200,
    'Login successful',
    _.omit(req.user, ['password'])
  );
};

// User signup bro!
/**
 * @param req Express.Request
 * @param res Express.Response
 * @returns json body containing user data
 */
export const signup = async (req, res) => {
  const {
    username,
    name,
    email,
    password
  } = req.body;

  const hashedPassword = await passwordHash(password);

  const _user = await createUser({
    username,
    name,
    email,
    password: hashedPassword
  });

  if (_user.success) {
    const payload = {
      userId: _user.user.dataValues.userId,
      isAdmin: _user.user.dataValues.isAdmin
    };
    const token = await generateToken(payload);
    _user.user.dataValues.token = token;

    const mailBody = newUserVerificationEmail(
      req.user.name, SITE_URL, token, req.body.email
    );
    const sendEmail = sendMail(req.body.email, 'ITARJ - Verify Email', mailBody);

    return respondWithSuccess(
      res,
      200,
      'User signup successful',
      _.omit(_user.user.dataValues, ['password'])
    );
  }
  return respondWithWarning(res, 400, 'Error creating User :(');
};
