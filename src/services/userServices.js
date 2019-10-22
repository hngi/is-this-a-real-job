import Model from '../models';

const { User } = Model;


/**
 * @param {object} queryOption
 * @returns {object} an object containing the information of the user or null
 */
export const findSingleUser = async (queryOption = {}) => {
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
