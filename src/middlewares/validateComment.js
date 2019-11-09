import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning, respondWithSuccess } from '../helpers/responseHandler';
import { getSingleComment, findPostForComment } from '../services/commentServices';

/**
 * validate comment entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateCommentData = (req, res, next) => {
  const commentSchema = Joi.object().keys({
    body: Joi.string().required().trim()
  });

  const errors = joiValidator(req.body, commentSchema);

  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Input', errors);
};

/**
 * Check if comment is real
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const validateComment = async (req, res, next) => {
  const { commentId, inviteId } = req.params;

  const data = await Promise.all([
    getSingleComment(commentId),
    findPostForComment(inviteId)
  ]);

  if (data[0].error) {
    return respondWithWarning(res, 404, 'Comment does not exist!');
  }
  let comment = data[0];
  comment.invite = data[1].invite;
  req.comment = comment;
  return next();
};

/**
 * Check if fellow has the right to delete this comment
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const canDeleteComment = async (req, res, next) => {
  if (req.auth.userId === req.comment.invite.userId || req.auth.userId === req.comment.userId || req.auth.isAdmin) {
    return next();
  } else {
    return respondWithWarning(res, 401, 'You are not authorized to perform this action, thou fellow');
  }
};