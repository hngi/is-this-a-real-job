import {
  respondWithSuccess,
  respondWithWarning
} from '../helpers/responseHandler';

import { findMetrics } from '../services/metricsServices';

/**
 * Fetch metrics for users, invites and comments
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getMetrics = async (req, res) => {
  try {
    const metricsList = await findMetrics();

    return respondWithSuccess(res, 200, 'Successful', metricsList);
  } catch (error) {
    respondWithWarning(res, 500, 'Server error');
  }
};
