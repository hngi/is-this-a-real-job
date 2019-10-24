import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';

import { fetchOneInvite, fetchAllInvites, saveInvite } from '../services/inviteServices';

export const getOneInvite = async (req, res)=> {
  const { inviteId } = req.params;

  const invite = await fetchOneInvite({inviteId});

  if (invite)
    return respondWithSuccess(res, 200, 'Invite found', invite);
  else
    return respondWithWarning(res, 404, 'Invite not found');
};

export const getAllInvites = async (req, res)=> {
  const invitesList = await fetchAllInvites();

  if (invitesList.length > 0)
    return respondWithSuccess(res, 200, 'Retrieved invites', invitesList);
  else
    return respondWithWarning(res, 404, 'Failed to fetch invites');
};

export const saveNewInvite = async (req, res)=> {
  saveInvite(req.body);
};
