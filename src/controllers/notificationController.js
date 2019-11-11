/* eslint-disable max-len */
import { respondWithWarning,
  respondWithSuccess } from '../helpers/responseHandler';
import { findNotificationsForUser, createNotificationForUser, setNotificationStatus, notifyByEmail } from '../services/notificationServices';

export const getNotifications = async (req, res) => {
  findNotificationsForUser(req.auth.userId)
    .then((notifications) => respondWithSuccess(
      res, 200, 'Successful', notifications
    ))
    .catch((error) => respondWithWarning(res, error.status, error.message));
};

/**
 * Mark a notification for a post as read
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const markNotificationAsRead = async (req, res) => {
  const { notifications } = req.body;

  const notification = await setNotificationStatus(notifications, true).catch(e => { throw e; });

  return respondWithSuccess(
    res, 200, 'Successful', notification
  );
};
