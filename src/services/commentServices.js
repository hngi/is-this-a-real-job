import Model from '../models';

const { Comment, Invite } = Model;


/**
 * @param {string} inviteId id of the job invite to retrieve comments for
 * @returns {array} an array of the comments or empty array
 */
export const findCommentsForPost = async (inviteId) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: Invite, as: 'invites' }
      ],
      where: { inviteId }
    });
    return comments;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {object} commentData id of the job invite to retrieve comments for
 * @returns {object} an object containing created comment data
 */
export const createCommentForPost = async (commentData) => {
  try {
    const comment = await Comment.create(commentData);
    return comment.dataValues;
  } catch (error) {
    console.log(error);
  }
};
