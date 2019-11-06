/* eslint-disable no-console */
import Model from '../models';
import { notifyByEmail } from './notificationServices';
import { SocketMethods } from '../routes/events';

const {
  Comment, Invite, User, Notification
} = Model;

export const getSingleComment = async (commentId) => {
  try {
    const data = await Comment.findOne({
      include: [
        { model: User, as: 'user' },
        { model: Invite, as: 'invite' }
      ],
      where: { commentId },
      logging: false
    });

    const comment = data.dataValues;
    comment.user = comment.user ? comment.user.dataValues : {};
    comment.invite = comment.invite ? comment.invite.dataValues : {};
    return comment;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {string} inviteId id of the job invite to retrieve comments for
 * @returns {array} an array of the comments or empty array
 */
export const findCommentsForPost = async (inviteId) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: User, as: 'user' }
      ],
      where: { inviteId },
      logging: false
    });

    return comments.map(comment => {
      comment = comment.dataValues;
      comment.user = comment.user ? comment.user.dataValues : {};
      comment.invite = comment.invite ? comment.invite.dataValues : {};
      return comment;
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {object} res http response object
 * @param {object} commentData id of the job invite to retrieve comments for
 * @returns {object} an object containing created comment data
 */
export const createCommentForPost = async (res, commentData) => {
  const e = new Error();
  const objs = await Promise.all([User.findOne({
    where: {
      userId: commentData.userId
    },
    logging: false
  }), Invite.findOne({ where: { inviteId: commentData.inviteId }, logging: false })]).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });

  if (!Array.isArray(objs) || objs.length !== 2) { // user or invite does not exist
    e.status = 404;
    e.message = 'user/invite not found';
    throw e;
  }

  const userObj = objs[0].dataValues;
  const inviteObj = objs[1].dataValues;

  return Model.sequelize.transaction(t => Comment
    .create(commentData, { transaction: t })
    .then(comment => {
      comment.dataValues.user = userObj;
      return comment.dataValues;
    })
    .then(comment => {
      const data = {
        userId: inviteObj.userId,
        type: 'comment',
        commentId: comment.commentId,
        inviteId: comment.inviteId,
        message: `@${userObj.username} commented on your post`,
      };
      return Notification.create(data, { transaction: t })
        .then(async notification => {
          SocketMethods.emitNotification(notification);
          notification.mailSent = await notifyByEmail(res, notification);
          return Object.assign(comment, { notification });
        });
    }))
    .catch(err => {
      console.error(err);
      e.status = 500;
      e.message = 'A technical error occured. Contact support.';
      throw e;
    });
};
