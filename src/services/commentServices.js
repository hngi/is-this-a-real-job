/* eslint-disable no-console */
import Model from '../models';

const {
  Comment, Invite, User, Notification
} = Model;


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
 * @param {object} commentData id of the job invite to retrieve comments for
 * @returns {object} an object containing created comment data
 */
export const createCommentForPost = async (commentData) => {
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
      return Notification.create(data, { transaction: t }).then(_ => comment);
    }))
    .catch(err => {
      console.error(err);
      e.status = 500;
      e.message = 'A technical error occured. Contact support.';
      throw e;
    });
};
