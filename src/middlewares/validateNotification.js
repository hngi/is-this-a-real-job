import { respondWithWarning } from '../helpers/responseHandler';
import { fetchOneNotification } from '../services/notificationServices';

/**
 * Function to check if a notification ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateNotification = async (req, res, next) => {
  const { notificationId } = req.params;

  const findNotification = await fetchOneNotification({ notificationId });
  if (!findNotification) {
    return respondWithWarning(res, 404, 'Notification not found');
  }
  // console.log(findNotification);
  // req.notification = findNotification.toJSON();
  req.notification = findNotification;
  return next();
};

/**
 * Function to check if a notification is owned by user 
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateNotificationOwner = async (req, res, next) => {
    if (req.auth.userId !== req.notification.userId ) {
      return respondWithWarning(res, 401, 'You are not authorized to perform this action');
    }
  
    return next();
  };
  
