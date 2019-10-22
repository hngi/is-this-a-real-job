import Model from '../models';
import { respondWithSuccess, respondWithWarning } from '../helpers/responseHandler';

const { User } = Model;

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

export const blockUser = async(req, res)=>{
    User.update(
        {isBlocked: true},
        {where: {uuid: req.params.id}}
        ).then(()=>{
      return respondWithSuccess(res, 200, 'User Blocked')
    }).catch((error)=>{
        return respondWithWarning(res, 400, 'User not found', error)
    })
  }



/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

export const getUsers = (req, res)=>{
    User.findAll().then((users)=>{
      
      return respondWithSuccess(res, 200, 'Success', users )
    }).catch((error)=>{
        return respondWithWarning(res, 400, 'User not found', error)
    })
  }


  