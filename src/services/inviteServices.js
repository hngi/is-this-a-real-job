/* eslint-disable no-console */
import Model from '../models';

const { Invite } = Model;

/**
 * @param {object} queryOption
 * @returns {object} an object containing the information of the job invite or null
 */
export const findSingleInvite = async (queryOption = {}) => {
  try {
    const invite = await Invite.findOne({
      where: queryOption,
      logging: false
    });
    return invite;
  } catch (error) {
    console.log(error);
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
    const invite = await Invite.update({ upVotes }, {
      where: queryOption,
      logging: false
    }).then(() => Invite.findOne({ where: queryOption }))
      .then((updatedInvite) => updatedInvite);
    return invite;
  } catch (error) {
    console.log(error);
  }
};
