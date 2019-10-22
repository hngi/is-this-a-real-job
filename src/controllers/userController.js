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
        {where: {userId: req.params.id}}
        ).then(()=>{
      return respondWithSuccess(res, 200, 'User Blocked')
    }).catch((error)=>{
        return respondWithWarning(res, 400, 'User not found')
    })
  }



/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

export const getUsers = (req, res)=>{
    User.findAll().then((users)=>{
      
      return respondWithSuccess(res, 200, users )
    }).catch((error)=>{
        return respondWithWarning(res, 400, error)
    })
  }


  