import _ from 'lodash';
import { respondWithWarning,
  respondWithSuccess } from '../helpers/responseHandler';
import { findCommentsForPost, createCommentForPost, deleteOneComment } from '../services/commentServices';

/**
 * class handles comments
 */

/**
 * Create a comment for a post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const createComment = async (req, res) => {
  try {
    const { body } = req.body;
    const { inviteId } = req.params;

    const comment = await createCommentForPost(res, { inviteId, body, userId: req.auth.userId })
      .catch(e => { throw e; });

    if (comment) {
      return respondWithSuccess(
        res, 200, 'Comment added successfully', comment
      );
    }
  } catch (error) {
    return respondWithWarning(res, error.status, error.message);
  }
};

/**
 * Comments should be deleted by:
 * - Admin
 * - Comment creator
 * - Owner of the Invite the comment is under
 */

/**
 * Delete comment
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    respondWithWarning(res, 400, 'Bad Request');
  }
  const deleted = await deleteOneComment({ commentId });
  if (!deleted.error) {
    respondWithSuccess(res, 200, 'Comment deleted successfully!');
  } else {
    respondWithWarning(res, 500, 'Error deleting comment');
  }
};

/**
 * Fetch comments for a specific post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getComments = async (req, res) => {
  const { inviteId } = req.params;

  const comments = await findCommentsForPost(inviteId);

  return respondWithSuccess(
    res, 200, 'Successful', comments
  );
};
