import Model from '../models';
import uuid from 'uuid';

const { User } = Model;


/**
 * @param {object} queryOption
 * @returns {object} an object containing the information of the user or null
 */
export const  findValidUser = async (queryOption = {uuid}) => {
  try {
    const user = await User.findOne({
      where: queryOption,
      logging: false
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
