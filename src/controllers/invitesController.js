import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';

import { fetchOneInvite, fetchAllInvites, saveInvite } from '../services/inviteServices';

export const getOneInvite = async (req, res)=> {
  try {
    const { inviteId } = req.params;

    const invite = await fetchOneInvite({inviteId});

    if (invite)
      return respondWithSuccess(res, 200, 'Invite found', invite);
    else
      return respondWithWarning(res, 404, 'Invite not found');
  }
  catch (error) {
    console.log(error);
    return respondWithWarning(res, 500, 'Server error');
  }
};

export const getAllInvites = async (req, res)=> {
  try {
    const invitesList = await fetchAllInvites();

    if (invitesList.length > 0)
      return respondWithSuccess(res, 200, 'Retrieved invites', invitesList);
    else
      return respondWithWarning(res, 404, 'Failed to fetch invites');
  }
  catch (error) {
    console.log(error);
    return respondWithWarning(res, 500, 'Server error');
  }
};

export const saveNewInvite = async (req, res)=> {
  try {
    const invite = await saveInvite(req.body).catch(error => { throw error; });
    
    return respondWithSuccess(res, 200, 'Job Invite submitted successfully', invite);
  } 
  catch (error) {
    return respondWithWarning(res, error.status, error.message);
  }
};
