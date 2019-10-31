import { respondWithWarning } from '../helpers/responseHandler';
import { verifyToken, formatJWTErrorMessage } from '../helpers/jwt';

/**
 * Method to validate logged in cookies
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const validateCookies = (req, res, next) => {
  const token = req.cookies.get('token', { signed: true });
  if (token) {
    try {
      const { key } = verifyToken(token);
      req.auth = key;
      req.isAuth = true;
      return next();
    } catch (error) {
      return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
    }
  }
  req.auth = {};
  req.isAuth = false;
  return next();
};

/**
 * Set httpOnly key after sign in
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const signUserIn = (req, res, next) => {
  const token = req.cookies.get('login');
  if (token) {
    res.cookies.set('login'); // delete login cookie

    try {
      const { key } = verifyToken(token);
      req.auth = key;
      req.isAuth = true;
      res.cookies.set('token', token, { signed: true }); // set httpOnly signed token

      return next();
    } catch (error) {
      return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
    }
  }
  return next();
};

/**
 * Sign user out
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const signUserOut = (req, res, next) => {
  const signOut = req.cookies.get('signOut');
  if (signOut) {
    res.cookies.set('signOut');
    res.cookies.set('token');
    req.auth = {};
    req.isAuth = false;
  }
  return next();
};
