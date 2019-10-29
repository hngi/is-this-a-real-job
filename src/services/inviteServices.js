/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import Model from "../models";
import Sequelize from "sequelize";

const { Invite, User, Comment } = Model;

/**
 * @param {object} queryOption Finds an invite that matches the parameters in this object.
 * @returns {object} an object containing the information of the job invite or null
 */
export const fetchOneInvite = async (queryOption = {}) => {
  try {
    const invite = await Invite.findOne({
      include: [{ model: User, as: "user" }],
      where: queryOption,
      logging: false
    });

    if (invite) {
      invite.dataValues.user = invite.dataValues.user.dataValues;
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
        { model: User, as: "user" },
        { model: Comment, as: "comments" }
      ],
      order: [["createdAt", "DESC"]],
      logging: false
    });

    return invites.map(invite => {
      invite = invite.dataValues;
      invite.user = invite.user ? invite.user.dataValues : {};
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
    e.message = "A technical error occured. Contact support.";
    throw e;
  });

  if (!userObj) {
    // user does not exist
    e.status = 400;
    e.message = "Unknown user.";
    throw e;
  }

  const invite = await Invite.create(inviteData).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = "A technical error occured. Contact support.";
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
    error.message = "A technical error occured. Contact Support";
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

export const upvoteOneInvite = async (upVotes, queryOption = {}) => {
  try {
    const invite = await Invite.update(
      { upVotes },
      {
        where: queryOption,
        logging: false
      }
    )
      .then(() => Invite.findOne({ where: queryOption }))
      .then(updatedInvite => updatedInvite);
    return invite;
  } catch (error) {
    console.log(error);
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
      where: Sequelize.literal("MATCH (body) AGAINST(:string) OR MATCH(title) AGAINST(:string)"),
      // include: [
      //   { model: User, as: "user" },
      //   { model: Comment, as: "comments" }
      // ],
      replacements: {
        string: string
      },
      order: [["createdAt"]],
      logging: false
    });

    return result.map(invite => {
      invite = invite.dataValues;
      invite.user = invite.user ? invite.user.dataValues : {};
      return invite;
    });
  } catch (error) {
    console.log("Error! ", error);
  }
};
