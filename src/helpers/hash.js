import bcrypt from 'bcryptjs';
import { SALT_ROUNDS } from '../config/constants';
/**
 * @param  {String} password
 * @returns {String} hashed password
 */
const passwordHash = async password =>
  bcrypt.hash(password, Number(SALT_ROUNDS));
/**
 * @param  {String} userPass
 * @param  {String} hashedPass
 * @returns {Boolean} boolean
 */
const comparePasswords = async (userPass, hashedPass) =>
  bcrypt.compare(userPass, hashedPass);

export { passwordHash, comparePasswords };
