/* eslint-disable max-len */
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findNotificationsForUser, createNotificationForUser } from '../services/notificationServices';
import { notifyByEmail } from '../services/emailServices';

/**
 * class handles notifications
 */

/**
 * Create a notification for a post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

import Joi from '@hapi/joi';
import {
  joiValidator
} from '../helpers/joiValidator';
import {
  respondWithWarning
} from '../helpers/responseHandler';
import {
  VALID_UUID
} from '../config/constants';

/**
 * validate comment entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateNotificationData = (req, res, next) => {
  const { type } = req.query;

  const schemaMap = {
    target: Joi.string().pattern(VALID_UUID).required().trim()
  };

  if (!type) {
    return respondWithWarning(res, 400, 'Query param \'type\' must be specified.');
  }

  if (type === 'comment') {
    schemaMap.commentId = Joi.string().required().trim();
  }

  const notificationSchema = Joi.object().keys(schemaMap);

  const errors = joiValidator(req.body, notificationSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Input', errors);
};


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
