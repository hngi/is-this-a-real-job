import _ from 'lodash';
import {
  respondWithWarning,
  respondWithSuccess
} from '../helpers/responseHandler';
import { findReports, reportUser } from '../services/reportServices';

/**
 * class handles reports
 */

/**
 * Create a report for a user
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const createReport = async (req, res) => {
  try {
    const { offender, offence, details } = req.body;

    const report = await reportUser(res, {
      offence, offenderId: offender, reporterId: req.auth.userId, details
    }).catch(e => { throw e; });

    if (report) {
      return respondWithSuccess(res, 200, 'User has been reported successfully', report);
    }
  } catch (error) {
    return respondWithWarning(res, error.status, error.message);
  }
};

/**
 * Fetch reports
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getReports = async (req, res) => {
  const reports = await findReports();

  return respondWithSuccess(res, 200, 'Successful', reports);
};
