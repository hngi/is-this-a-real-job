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
      where: { userId },
      order: [['createdAt', 'DESC']],
      logging: false
    });

    return notifications;
  } catch (error) {
    console.error(error);
    error.message = 'An error occurred. Please contact technical support';
    error.status = 500;
    throw error;
  }
};

// /**
//  * @typedef NotificationData
//  * @property {string} type ENUM('comment' || 'upvote')
//  * @property {string} userId user that will receive the notification
//  * @property {string} inviteId id of invite
//  * @property {string} [commentId] id of comment that was created.
//  * OPTIONAL and depends on type = 'comment'
//  */

// /**
//  * Creates a new notification for a specified user
//  * @param {NotificationData} notificationData
//  * @returns {object} an object containing created notification data
//  */
// export const createNotificationForUser = async (notificationData) => {
//   const e = new Error();
//   const userObj = await User.findOne({
//     where: {
//       userId: notificationData.userId
//     },
//     logging: false
//   }).catch(err => {
//     console.error(err);
//     e.status = 500;
//     e.message = 'A technical error occured. Contact support.';
//     throw e;
//   });


//   if (!userObj) { // user does not exist
//     e.status = 404;
//     e.message = 'user not found';
//     throw e;
//   }

// eslint-disable-next-line max-len
//   notificationData.message = `@${userObj.username} ${notificationData.type === 'comment' ? 'commented your post' : 'upvoted your post'}`;

//   const notification = await Notification.create(notificationData).catch(err => {
//     console.error(err);
//     e.status = 500;
//     e.message = 'A technical error occured. Contact support.';
//     throw e;
//   });

//   return notification.dataValues;
// };


/**
 * Updates the status for a notification
 * @param {string} notifications an array of notifications
 * @param {boolean} isSeen
 * @returns {object} an object containing updated notification data
 */
export const setNotificationStatus = async (notifications, isSeen) => {
  const e = new Error();
  try {
    if (!Array.isArray(notifications) || notifications.length === 0) {
      e.message = 'You must pass in notifications as an array of UUIDs';
      e.status = 400;
      throw e;
    }

    const notification = await Notification
      .update({ isSeen }, { where: { notificationId: notifications } });
    const notificationObjs = await Notification
      .findAll({
        where: { notificationId: notifications },
        include: [{ model: User, as: 'target' }]
      });

    if (notification[0] !== notifications.length) {
      e.message = `Unable to set notification status as ${isSeen ? 'read' : 'unread'}`;
      e.status = 400;
      throw e;
    }
    return notificationObjs.map(n => n.dataValues);
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
    notif.title = (notif.type === 'comment') ? 'One New Comment On Your Job Invite' : 'Your Job Invite Was Upvoted';
    notif.recipient = await findSingleUser({ userId: notif.userId });
    notif.recipient = notif.recipient.dataValues;
    notif.target = notif.target || notif.recipient; // set target if not present
    notif.details = notif.details || '';

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
