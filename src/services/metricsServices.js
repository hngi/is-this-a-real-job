import Model from '../models';

const { Invite, User, Comment } = Model;

/**
 * @returns {object} the count of users, invites and comments
 */
export const findMetrics = async () => {
  const metrics = await Promise.all([User.count(), Invite.count(), Comment.count()])
    .catch(e => { throw e; });

  // get the count and throw an error if any

  return { usersCount: metrics[0], invitesCount: metrics[1], commentsCount: metrics[2] };
};
