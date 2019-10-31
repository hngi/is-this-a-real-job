/* eslint-disable no-console */
import Model from '../models';

const { Comment, Invite, User } = Model;

export const getSingleComment = async (commentId) => {
  try {
    const comment = await Comment.findOne({
      include: [
        { model: User, as: 'user' },
        { model: Invite, as: 'invite' }
      ],
      where: { commentId },
      logging: false
    });

    comment = comment.dataValues;
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
 * @param {object} commentData id of the job invite to retrieve comments for
 * @returns {object} an object containing created comment data
 */
export const createCommentForPost = async (commentData) => {
  const e = new Error();
  const userObj = await User.findOne({
    where: {
      userId: commentData.userId
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

  const comment = await Comment.create(commentData).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });
  comment.dataValues.user = userObj;
  return comment.dataValues;
};
