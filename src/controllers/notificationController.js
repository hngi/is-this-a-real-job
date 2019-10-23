import {
    respondWithSuccess,
    respondWithWarning
  } from '../helpers/responseHandler';
  import {
    fetchOneNotification,
  } from '../services/notificationServices';
  
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
  export const updateNotification= async (req, res) => {
    const {
      isRead,
      notificationId
    } = req.notification;

    // mark as read
    const isRead = true;
    const notification = await markAsRead(isRead, {
      notificationId
    });
    respondWithSuccess(res, 200, 'notification read', notification.toJSON());
  };
  