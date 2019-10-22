import UserModel from '../models/userModel';


/**
 * @param {object} queryOption
 * @returns {object} an object containing the information of the user or null
 */
export const findSingleUser = async (queryOption = {}) => {
  try {
    const user = await UserModel.findOne(queryOption);
    return user;
  } catch (error) {
    return {
      errors: error
    };
  }
};
