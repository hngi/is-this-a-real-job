/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import Sequelize from 'sequelize';
import Model from '../models';

const {
  Invite, User, Comment, Vote
} = Model;

/**
 * @param {object} queryOption Finds an invite that matches the parameters in this object.
 * @returns {object} an object containing the information of the job invite or null
 */
export const fetchOneInvite = async (queryOption = {}) => {
  try {
    const invite = await Invite.findOne({
      include: [
        {
          model: User,
          as: 'user',
        },
        {
          model: Vote,
          as: 'votes',
        },
        { model: Comment, as: 'comments' },

      ],
      where: queryOption,
      logging: false
    });

    if (invite) {
      invite.dataValues.user = invite.dataValues.user.dataValues;
      invite.dataValues.comments = invite.dataValues.comments.map((c) => c.dataValues);
      invite.dataValues.votes = invite.dataValues.votes.map((vote) => vote.dataValues);
    }
    return invite ? invite.dataValues : null;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @returns {object} an array containing all submitted job invites in the database or null.
 */
export const fetchAllInvites = async () => {
  try {
    const invites = await Invite.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Comment, as: 'comments' },
        { model: Vote, as: 'votes' }
      ],
      order: [['createdAt', 'DESC']],
      logging: false
    });

    return invites.map(invite => {
      invite = invite.dataValues;
      invite.user = invite.user ? invite.user.dataValues : {};
      invite.votes = invite.votes.map((vote) => vote.dataValues);
      return invite;
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {object} inviteData Data to be stored for the new job invite.
 * @returns {object} an object containing the newly created invite data.
 */
export const saveInvite = async inviteData => {
  const e = new Error();
  const userObj = await User.findOne({
    where: {
      userId: inviteData.userId
    },
    logging: false
  }).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });

  if (!userObj) {
    // user does not exist
    e.status = 400;
    e.message = 'Unknown user.';
    throw e;
  }

  const invite = await Invite.create(inviteData).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });

  return invite ? invite.dataValues : null;
};

/**
 * Function to update an invite
 * @param {string} inviteId invite id of the invite to be updated
 * @param {object} inviteData updated invite fields
 */
export const updateOneInvite = async (inviteId, inviteData) => {
  try {
    const invite = await Invite.findOne({
      where: { inviteId },
      logging: false
    });

    await invite.update(inviteData, { logging: false });

    return invite ? invite.dataValues : null;
  } catch (error) {
    console.log(error);
    error.status = 500;
    error.message = 'A technical error occured. Contact Support';
    throw error;
  }
};

export const deleteOneInvite = async (queryOption = {}) => {
  try {
    const invite = await Invite.destroy({
      where: queryOption,
      logging: false
    });
    return invite;
  } catch (error) {
    console.log(error);
  }
};

export const fetchOneVoteCount = async (inviteId, userId) => {
  try {
    const invite = await fetchOneInvite({ inviteId });

    const voteCount = invite.votes.reduce((p, val) => {
      if (val.type === 'up') {
        p.upvotes += 1;
      }

      if (val.type === 'down') {
        p.downvotes += 1;
      }

      if (val.userId === userId) {
        (val.type === 'up') ? p.upvoted = true : p.downvoted = true;
      }

      return p;
    }, {
      upvotes: 0,
      downvotes: 0,
      upvoted: false,
      downvoted: false
    });

    return voteCount;
  } catch (error) {
    console.log(error);
    error.status = 500;
    error.message = 'A technical error occured. Contact Support';
    throw error;
  }
};

export const upvoteOneInvite = async (userId, inviteId) => {
  try {
    let vote = await Vote.findOne({
      where: {
        userId,
        inviteId,
      }
    });

    if (vote) {
      await vote.update({ type: 'up' });
      return vote.dataValues;
    }

    vote = await Vote.create({ userId, inviteId, type: 'up' });
    return vote.dataValues;
  } catch (error) {
    console.log(error);
    error.status = 500;
    error.message = 'A technical error occured. Contact Support';
    throw error;
  }
};

export const downVoteOneInvite = async (userId, inviteId) => {
  try {
    let vote = await Vote.findOne({
      where: {
        userId,
        inviteId,
      }
    });

    if (vote) {
      await vote.update({ type: 'down' });
      return vote.dataValues;
    }

    vote = await Vote.create({ userId, inviteId, type: 'down' });
    return vote.dataValues;
  } catch (error) {
    console.log(error);
    error.status = 500;
    error.message = 'A technical error occured. Contact Support';
    throw error;
  }
};

export const unvoteOneInvite = async (userId, inviteId) => {
  try {
    const vote = await Vote.destroy({
      where: {
        userId,
        inviteId
      },
    });

    return vote;
  } catch (error) {
    console.log(error);
    error.status = 500;
    error.message = 'A technical error occured. Contact Support';
    throw error;
  }
};

/**
 * searchInvites
 *
 * Simple search function that checks the body of all posts to see if any word in
 * given string matches
 * Returns the matching posts
 */
export const searchInvites = async string => {
  try {
    const result = await Invite.findAll({
      where: Sequelize.literal('MATCH (body, title, company, location) AGAINST(:string)'),
      include: [
        { model: User, as: 'user' },
        // { model: Comment, as: "comments" }
      ],
      replacements: {
        string
      },
      order: [['createdAt']],
      logging: false
    });

    return result.map(invite => {
      invite = invite.dataValues;
      invite.user = invite.user ? invite.user.dataValues : {};
      return invite;
    });
  } catch (error) {
    console.log('Error! ', error);
    return error;
  }
};
