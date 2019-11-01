/* eslint-disable max-len */
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import {
  findNotificationsForUser, createNotificationForUser, setNotificationStatus, notifyByEmail
} from '../services/notificationServices';

/**
 * class handles notifications
 */

/**
 * Create a notification for a post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const createNotification = async (req, res) => {
  try {
    const { target, commentId, inviteId } = req.body;
    const { type } = req.query;

    const notification = await createNotificationForUser({
      type, userId: target, commentId, inviteId
    }).catch(e => { throw e; });

    if (notification) {
      notification.mailSent = await notifyByEmail(res, { ...notification });
      return respondWithSuccess(res, 200, 'Notification added successfully', notification);
    }
  } catch (error) {
    return respondWithWarning(res, error.status, error.message);
  }
};

/**
 * Fetch notifications for a specific post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getNotifications = async (req, res) => {
  const notifications = await findNotificationsForUser(req.auth.userId)
    .catch(error => respondWithWarning(res, error.status, error.message));

  return respondWithSuccess(res, 200, 'Successful', notifications);
};


/**
 * Mark a notification for a post as read
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const markNotificationAsRead = async (req, res) => {
  const { notificationId } = req.params;

  const notification = await setNotificationStatus(notificationId, true).catch(e => { throw e; });

  return respondWithSuccess(res, 200, 'Successful', notification);
};
