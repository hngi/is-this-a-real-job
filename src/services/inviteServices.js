import Model from '../models';

const { Invite, User } = Model;

/**
 * @param {object} queryOption Finds an invite that matches the parameters in this object.
 * @returns {object} an object containing the information of the job invite or null
 */
export const fetchOneInvite = async (queryOption = {})=> {
  try {
    const invite = await Invite.findOne({
      where: queryOption,
      logging: false
    });

    return invite.dataValues;
  }
  catch (error) {
    console.log(error);
  }
};

/**
 * @returns {object} an array containing all submitted job invites in the database or null.
 */
export const fetchAllInvites = async ()=> {
  try {
    const invites = await Invite.findAll({});

    for (let i = 0; i < invites.length; i++) {
      invites[i] = invites[i].dataValues;
    }

    return  invites;
  }
  catch (error) {
    console.log(error);
  }
};

/**
 * @param {object} inviteData Data to be stored for the new job invite.
 * @returns {object} an object containing the newly created invite data.
 */
export const saveInvite = async (inviteData)=> {
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

  if (!userObj) { // user does not exist
    e.status = 404;
    e.message = 'Unknown user.';
    throw e;
  }

  const invite = await Invite.create(inviteData).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });

  return invite.dataValues;
};
