/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import Model from '../models';

const { User,  Notification } = Model;
/**
 * @param {object} queryOption Finds an invite that matches the parameters in this object.
 * @returns {object} an object containing the information of the job invite or null
 */
export const fetchOneNotification = async (queryOption = {}) => {
    try {
      const notification = await Notification.findOne({
        include: [
          { model: User, as: 'user' }
        ],
        where: queryOption,
        logging: false
      });
  
      if (notification) {
        notification.dataValues.user = notification.dataValues.user.dataValues;
      }
      return notification ? notification.dataValues : null;
    } catch (error) {
      console.log(error);
    }
  };


/**
 * Function to update by marking notification as read
 * @param {string} notificationId   id of the notification to be marked as read
 * @param {object} notificationData updated notification fields
 */
export const updateOneNotification = async (notificationId, notificationData) => {
  try {
    const notification = await Notification.findOne({
      where: { notificationId },
      logging: false
    });

    await notification.update(notificationData, { logging: false });

    return notification ? notification.dataValues : null;
  } catch (error) {
    console.log(error);
    error.status = 500;
    error.message = 'A technical error occured. Contact Support';
    throw error;
  }
};

