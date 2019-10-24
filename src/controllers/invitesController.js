import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';

import { fetchOneInvite, fetchAllInvites, saveInvite } from '../services/inviteServices';

export const getOneInvite = async (req, res)=> {
  const { inviteId } = req.params;

  const invite = await fetchOneInvite(inviteId);

  return respondWithSuccess(res, 200, 'Invite found', invite);
};

export const getAllInvites = (req, res)=> {

};

export const saveNewInvite = (req, res)=> {
  saveInvite(req.body);
};
