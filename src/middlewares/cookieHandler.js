import { respondWithWarning } from '../helpers/responseHandler';
import { verifyToken, formatJWTErrorMessage } from '../helpers/jwt';
import { findSingleUser } from '../services/userServices';


/**
 * Method to clear all logged in cookies
 * @param {object} res
 */
const clearCookies = (res) => {
  res.cookies.set('signOut');
  res.cookies.set('token');
  res.cookies.set('username');
  res.cookies.set('name');
  res.cookies.set('isVerified');
};

/**
 * Method to validate logged in cookies
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const validateCookies = (req, res, next) => {
  const token = req.cookies.get('token', { signed: true });
  const username = req.cookies.get('username', { signed: true });
  const name = req.cookies.get('name', { signed: true });
  const isAdmin = req.cookies.get('isAdmin', { signed: true });
  const profileImage = req.cookies.get('profileImage', { signed: true });
  const isVerified = req.cookies.get('isVerified', { signed: true });
  if (token) {
    try {
      const { key } = verifyToken(token);
      req.auth = key;
      req.auth.username = username;
      req.auth.name = name;
      req.auth.isAdmin = isAdmin;
      req.auth.profileImage = profileImage;
      req.isAuth = true;
      req.auth.isVerified = isVerified;
      return next();
    } catch (error) {
      clearCookies(res);
      return res.redirect('/login?expired=1');
      // return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
    }
  }
  req.auth = {};
  req.isAuth = false;
  return next();
};

/**
 * Set httpOnly key after sign in
 * @param {object} req
 * @param {Express.Response} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const signUserIn = async (req, res, next) => {
  const token = req.cookies.get('login');
  if (token) {
    res.cookies.set('login'); // delete login cookie

    try {
      const { key } = verifyToken(token);

      const user = await findSingleUser({ userId: key.userId });

      req.auth = key;
      req.auth.username = user.username;
      req.auth.name = user.name;
      req.auth.isAdmin = user.isAdmin;
      req.auth.profileImage = user.profileImage;
      req.isAuth = true;
      req.auth.isVerified = user.isVerified;
      res.cookies.set('token', token, { signed: true }); // set httpOnly signed token
      res.cookies.set('username', user.username, { signed: true });
      res.cookies.set('name', user.name, { signed: true });
      res.cookies.set('isAdmin', user.isAdmin, { signed: true });
      res.cookies.set('profileImage', user.profileImage, { signed: true });
      res.cookies.set('isVerified', user.isVerified, { signed: true });

      return next();
    } catch (error) {
      clearCookies(res);
      return res.redirect('/login?expired=1');
      // return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
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
    clearCookies(res);
    req.auth = {};
    req.isAuth = false;
  }
  return next();
};
