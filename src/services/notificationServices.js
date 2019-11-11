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

/** Sends a notification to the relevant user.
 * @param {any} res The express response object. Used to call the render() method on the email template file.
 * @param {any} data An object with two properties defined below:
 * @param {any} data.notif The notification object as stored in the database,
 * @param {any} data.emailData - Data values for any details available to the calling function, that would otherwise be retrieved from the database. {author, recipient, report, comment, vote, invite}.
 */
export const notifyByEmail = async (res, {notif, emailData}) => {
  let mailSent;

  try {
    switch (notif.type) {
      case 'upvote':
      case 'downvote': {
        const { author, recipient, vote, invite } = emailData;
        if (!author || !vote || !invite)
          throw new Error('Missing required property in emailData object. `author`, `vote`, and `invite` objects are required for "vote" type notifications');
        //
        recipient = await findSingleUser({userId: notif.userId});
        emailData = { author, recipient, vote, invite };
        break;
      }
      case 'comment': {
        const { author, recipient, comment, invite } = emailData;
        if (!author || !comment || !invite)
          throw new Error('Missing required property in emailData object. `author`, `comment`, and `invite` objects are required for "comment" type notifications');
        //
        recipient = await findSingleUser({userId: notif.userId});
        emailData = { author, recipient, comment, invite };
        break;
      }
      case 'report': {
        const { author, recipient, report } = emailData;
        if (!author || !recipient || !report)
          throw new Error('Missing required property in emailData object. `author`, `recipient`, and `report` objects are required for "report" type notifications');
        //
        emailData = { author, recipient, report };
        break;
      }
      default:
        throw new Error("The notification type is not recognized by the notification service.");
    }

    // Consider setting a custom title based on the email type, so the user sees useful info before even opening the mail.
    emailData.title = "[ITARJ] New Notification From Is-This-A-Real-Job?";

    // Use callback syntax for res.render to recieve the html text into a variable.
    res.render('emailNotif', emailData, (error, renderedEmail) => {
      if (error) throw error;

      mailSent = sendMail(emailData.recipient.email, emailData.title, renderedEmail);
    });

    return mailSent;
  } 
  catch (error) {
    mailSent = false;
    console.log(error);
    return mailSent;
  }
};
