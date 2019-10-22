import Model from '../models';

const db = require('../database/db')
const { User } = Model;

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} an object containing the information of all the users or null
 */

const getUsers = (req, res)=>{
    User.findAll().then((users)=>{
      res.status(200).json(users);
    }).catch((error)=>{
        res.status(400).json({
            error
        })
    })
  }


  module.exports = getUsers;