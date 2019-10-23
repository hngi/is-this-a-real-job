import _ from 'lodash';
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findCommentsForPost, createCommentForPost } from '../services/commentServices';

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
  const { body, userId } = req.body;
  const { inviteId } = req.params;

  const comment = await createCommentForPost({ inviteId, body, userId });

  return respondWithSuccess(res, 200, 'Comment added successfully', comment);
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

  return respondWithSuccess(res, 200, '', comments);
};
