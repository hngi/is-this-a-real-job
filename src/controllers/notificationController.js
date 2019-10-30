/* eslint-disable max-len */
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findNotificationsForUser, createNotificationForUser } from '../services/notificationServices';
import { sendMail } from '../services/emailServices';
import { getSingleComment } from '../services/commentServices';
import { findSingleUser } from '../services/userServices';

const notifyByEmail = async (res, notif)=> {
  if (notif.type == 'comment') {
    notif.comment = await getSingleComment(notif.commentId);
    notif.comment.author = notif.comment.user || {};
    notif.targetPost = notif.comment.invite || {};
    notif.title = 'One New Comment On Your Job Invite';
  }
  else
    notif.title = 'Your Job Invite Was Upvoted';

  notif.recipient = await findSingleUser({userId: notif.userId});

  res.render('notificationEmail', notif, (err, renderedEmail)=> {
    if (err) throw err;
    
    sendMail(notif.recipient.email, notif.title, renderedEmail);
  });
}

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
      notifyByEmail(res, notification);
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
