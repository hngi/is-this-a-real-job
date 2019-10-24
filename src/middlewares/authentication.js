import { findSingleUser } from "../services/userServices";
import { respondWithWarning } from "../helpers/responseHandler";
import { verifyToken, formatJWTErrorMessage } from "../helpers/jwt";

/**
 * Method to generate token
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const authenticateUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (!token) {
    return respondWithWarning(res, 401, "Session Expired");
  }
  try {
    const { key } = verifyToken(token);
    req.auth = key;
    return next();
  } catch (error) {
    return respondWithWarning(res, 401, formatJWTErrorMessage(error.message));
  }
};

/**
 * Function to check if a user email is valid
 * @param {Express.Request} req this is the request object
 * @param {Express.Response} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validUser = async (req, res, next) => {
  const { email } = req.body;

  const findUser = await findSingleUser({ email });
  if (!findUser) {
    return respondWithWarning(res, 401, "Incorrect email or password");
  }
  req.user = findUser.toJSON();
  return next();
};

/**
 * Check if user already exists
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
export const verifyUniqueUser = async (req, res, next) => {
  const { email } = req.body;

  const findUser = await findSingleUser({ email });
  if (findUser) {
    return respondWithWarning(res, 409, "User Already exists: Duplicate User");
  } else {
    return next();
  }
};
