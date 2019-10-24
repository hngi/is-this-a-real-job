/* eslint-disable max-len */
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findNotificationsForUser, createNotificationForUser, updateOneNotification, fetchOneNotification } from '../services/notificationServices';

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
    const { target, commentId } = req.body;
    const { type } = req.query;

    const notification = await createNotificationForUser({ type, userId: target, commentId })
      .catch(e => { throw e; });

    if (notification) {
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
  const { userId } = req.params;

  const notifications = await findNotificationsForUser(userId);

  return respondWithSuccess(res, 200, 'Successful', notifications);
};



export const getOneNotification = async (req, res) => {
  try {
    const {
      notificationId
    } = req.params;

    const notification = await fetchOneNotification({
      notificationId
    });

    if (notification) {
      return respondWithSuccess(res, 200, 'notification found', notification);
    }
    respondWithWarning(res, 404, 'notification not found');
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};

 
/**
 * Update notification
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const markAsRead = async (req, res) => {
  const {
    notificationId
  } = req.params;

  const toRead = {
    isSeen: true,
  };

  try {
    const notification = await updateOneNotification(notificationId, toRead);

    respondWithSuccess(res, 200, 'Notification read successfully', notification);
  } catch (error) {
    respondWithWarning(res, error.status, error.message);
  }
};



