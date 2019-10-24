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

import { fetchOneNotification } from '../services/notificationServices';

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




/**
 * Function to check if a notification ID is valid
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateNotification = async (req, res, next) => {
  const { notificationId } = req.params;

  const findNotification = await fetchOneNotification({ notificationId });
  if (!findNotification) {
    return respondWithWarning(res, 404, 'Notification not found');
  }
  // console.log(findNotification);
  // req.notification = findNotification.toJSON();
  req.notification = findNotification;
  return next();
};

/**
 * Function to check if a notification is owned by user 
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validateNotificationOwner = async (req, res, next) => {
    if (req.auth.userId !== req.notification.userId ) {
      return respondWithWarning(res, 401, 'You are not authorized to perform this action');
    }
  
    return next();
  };
 