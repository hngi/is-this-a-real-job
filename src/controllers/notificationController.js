/* eslint-disable max-len */
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findNotificationsForUser, createNotificationForUser } from '../services/notificationServices';
import { sendMail } from '../services/emailServices';
import { getSingleComment } from '../services/commentServices';
import { findSingleUser } from '../services/userServices';

const notifyByEmail = async (res, notif) => {
  let mailSent;

  try {
    if (notif.type === 'comment') {
      notif.title = 'One New Comment On Your Job Invite';
    } else notif.title = 'Your Job Invite Was Upvoted';

    notif.recipient = await findSingleUser({ userId: notif.userId });
    notif.recipient = notif.recipient.dataValues;

    // Use callback syntax for res.render to recieve the html text into a variable.
    res.render('notificationEmail', notif, (error, renderedEmail) => {
      if (error) throw error;

      mailSent = sendMail(notif.recipient.email, notif.title, renderedEmail);
    });

    return mailSent;
  } catch (error) {
    mailSent = false;
    console.log(error);
    return mailSent;
  }
};

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
  const notifications = await findNotificationsForUser(req.auth.userId);

  return respondWithSuccess(res, 200, 'Successful', notifications);
};
