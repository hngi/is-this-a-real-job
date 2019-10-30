/* eslint-disable max-len */
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findNotificationsForUser, createNotificationForUser } from '../services/notificationServices';

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
