/* eslint-disable no-unneeded-ternary */
import {
    respondWithSuccess,
    respondWithWarning,
} from '../helpers/responseHandler';
import { updateOneUser, findUsers } from '../services/userServices';

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

export const blockUser = async (req, res) => {
    const { userId } = req.params;
    const isBlocked = req.user.isBlocked ? false : true;
    try {
        const user = await updateOneUser({ isBlocked }, { userId }).catch(e => {
            throw e;
        });
        respondWithSuccess(res, 200, 'Successful', user.toJSON());
    } catch (error) {
        return respondWithWarning(res, error.status, error.message);
    }
};

/**
 * Fetch users
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getUsers = async (req, res) => {
    const users = await findUsers();

    return respondWithSuccess(res, 200, 'Successful', users);
};
