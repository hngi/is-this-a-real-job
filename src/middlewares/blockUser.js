import Model from '../models';

const { User } = Model;

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

const blockUser = (req, res)=>{
    User.update(
        {isBlocked: true},
        {where: {_id: req.params.id}}
        ).then(()=>{
      res.status(201).json({message: "User blocked"});
    }).catch((error)=>{
        res.status(400).json({
            error
        })
    })
  }


  module.exports = blockUser;