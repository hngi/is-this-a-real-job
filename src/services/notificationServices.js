/* eslint-disable no-console */
import Model from '../models';

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
    console.log(error);
  }
};

/**
 * @typedef NotificationData
 * @property {string} type ENUM('comment' || 'upvote')
 * @property {string} userId user that will receive the notification
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
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });


  if (!userObj) { // user does not exist
    e.status = 404;
    e.message = 'user not found';
    throw e;
  }

  let action = notificationData.type,
    loc = '';
  if (notificationData.type === 'comment') {
    action = `${action}ed`;
    loc = 'on ';
  } else {
    action = `${action}d`;
  }
  const message = `@${userObj.username} ${action} ${loc}your post`;
  notificationData.message = message;

  const notification = await Notification.create(notificationData).catch(err => {
    console.error(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });
  // notification.dataValues.user = userObj;
  return notification.dataValues;
};
