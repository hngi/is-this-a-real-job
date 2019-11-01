/* eslint-disable no-console */
import Model from '../models';
import { sendMail } from './emailServices';
import { findSingleUser } from './userServices';

const {
  Notification,
  User
} = Model;

/**
 * Retrieves notifications for a specified user
 * @param {string} userId id of the job invite to retrieve notifications for
 * @returns {array} an array of the notifications or empty array
 */
export const findNotificationsForUser = async (userId) => {
  try {
    const notifications = await Notification.findAll({
      include: [{
        model: User,
        as: 'target'
      }],
      where: {
        userId
      },
      logging: false
    });

    return notifications;
    // return notifications.map(notification => {
    //   notification = notification.dataValues;
    //   notification.user = notification.user ? notification.user.dataValues : {};
    //   notification.invite = notification.invite ? notification.invite.dataValues : {};
    //   return notification;
    // });
  } catch (error) {
    console.error(error);
    error.message = 'An error occurred. Please contact technical support';
    error.status = 500;
    throw error;
  }
};

/**
 * @typedef NotificationData
 * @property {string} type ENUM('comment' || 'upvote')
 * @property {string} userId user that will receive the notification
 * @property {string} inviteId id of invite
 * @property {string} [commentId] id of comment that was created.
 * OPTIONAL and depends on type = 'comment'
 */

/**
 * Creates a new notification for a specified user
 * @param {NotificationData} notificationData
 * @returns {object} an object containing created notification data
 */
export const createNotificationForUser = async (notificationData) => {
  const e = new Error();
  const userObj = await User.findOne({
    where: {
      userId: notificationData.userId
    },
    logging: false
  }).catch(err => {
    console.error(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });


  if (!userObj) { // user does not exist
    e.status = 404;
    e.message = 'user not found';
    throw e;
  }

  notificationData.message = `@${userObj.username} ${notificationData.type === 'comment' ? 'commented your post' : 'upvoted your post'}`;

  const notification = await Notification.create(notificationData).catch(err => {
    console.error(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });
  // notification.dataValues.user = userObj;
  return notification.dataValues;
};


/**
 * Updates the status for a notification
 * @param {string} notificationId
 * @param {boolean} isSeen
 * @returns {object} an object containing updated notification data
 */
export const setNotificationStatus = async (notificationId, isSeen) => {
  const e = new Error();
  try {
    const notification = await Notification
      .update({ isSeen }, { where: { notificationId }, returning: true });
    console.info('at setnotification status: ', notification);
    if (!notification[0]) {
      e.message = `Unable to set notification status as ${isSeen ? 'read' : 'unread'}`;
      e.status = 400;
      throw e;
    }
    return notification[0];
  } catch (error) {
    console.error(error);
    e.message = 'Unable to set notification status';
    e.status = 500;
    throw e;
  }
};


export const notifyByEmail = async (res, notif) => {
  let mailSent;

  try {
    if (notif.type === 'comment') {
      /* notif.comment = await getSingleComment(notif.commentId);
      notif.comment.author = notif.comment.user || {};
      notif.targetPost = notif.comment.invite || {}; */
      notif.title = 'One New Comment On Your Job Invite';
    } else {
      notif.title = 'Your Job Invite Was Upvoted';
    }
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
