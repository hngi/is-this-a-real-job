import Model from "../models";

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

/**
 * Used to create a new record in the Users table
 *
 * @param {object} userData: username, name, email, password
 * @returns {object} {success: Boolean, user: any | error: any}
 */
export const createUser = async userData => {
  try {
    const user = await User.create(userData);
    return { success: true, user };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};
 /**
 * Get all users
 * @returns {object} an object containing the information of the user or null
 */
export const findUsers = async (queryOption = {}) => {
  try {
    const users = await User.findAll({
      logging: false
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Block a user
 * @param {object} data
 * @param {object} queryOption
 * @returns {object} an object containing the information of the user or null
 */
export const updateOneUser = async (data, queryOption = {}) => {
  try {
    const user = await User.update({ ...data }, {
      where: queryOption,
      returning: true,
      logging: false
    }).then(() => User.findOne({ where: queryOption }))
      .then((updatedUser) => updatedUser);
    return user;
  } catch (error) {
    console.log(error);
  }
};
