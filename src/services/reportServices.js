/* eslint-disable no-console */
import Model from '../models';
import { notifyByEmail } from './notificationServices';
import { SocketMethods } from '../routes/events';

const {
  Report, Invite, User, Notification
} = Model;

export const getSingleReport = async (reportId) => {
  try {
    const data = await Report.findOne({
      include: [
        { model: User, as: 'offender' },
        { model: User, as: 'reporter' }
      ],
      where: { reportId },
      logging: false
    });

    const report = data.dataValues;
    report.offender = report.offender ? report.offender.dataValues : {};
    report.reporter = report.reporter ? report.reporter.dataValues : {};
    return report;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @returns {array} an array of the reports or empty array
 */
export const findReports = async (queryOption = {}, offset = 0, limit = 10) => {
  try {
    let result;
    if (offset >= 0) {
      result = await Report.findAndCountAll({
        where: queryOption,
        include: [
          { model: User, as: 'offender' },
          { model: User, as: 'reporter' }
        ],
        order: [['createdAt', 'DESC']],
        offset,
        limit,
        logging: false
      });
    } else {
      result = await Report.findAllAndCount({
        where: queryOption,
        include: [
          { model: User, as: 'offender' },
          { model: User, as: 'reporter' }
        ],
        order: [['createdAt', 'DESC']],
        logging: false
      });
    }
    result.rows.map(report => {
      report = report.dataValues;
      report.offender = report.offender ? report.offender.dataValues : {};
      report.reporter = report.reporter ? report.reporter.dataValues : {};
      return report;
    });

    return { reports: result.rows, count: result.count };
  } catch (error) {
    console.log(error);
  }
};

/**
 * @typedef ReportData
 * @property {string} offenderId
 * @property {string} reporterId
 * @property {string} offence
 * @property {string} details
 */

/**
 * @param {object} res http response object
 * @param {ReportData} reportData report body
 * @returns {object} an object containing created report data
 */
export const reportUser = async (res, reportData) => {
  const e = new Error();
  const emailData = {};

  if (reportData.offenderId === reportData.reporterId) { // user or invite does not exist
    e.status = 400;
    e.message = 'You cannot report yourself';
    throw e;
  }

  const objs = await Promise.all([
    User.findOne({
      where: { userId: reportData.reporterId },
      logging: false
    }), User.findOne({
      where: { userId: reportData.offenderId },
      logging: false
    }), User.findAll({
      where: { isAdmin: true },
      logging: false
    })
  ]).catch(err => {
    console.log(err);
    e.status = 500;
    e.message = 'A technical error occured. Contact support.';
    throw e;
  });

  if (!Array.isArray(objs) || objs.length !== 3) { // user or invite does not exist
    e.status = 404;
    e.message = 'users not found';
    throw e;
  }

  const reporterObj = objs[0].dataValues;
  const offenderObj = objs[1].dataValues;
  const adminObjs = objs[2].map(admin => admin.dataValues);

  emailData.author = reporterObj;

  return Model.sequelize.transaction(t => Report
    .create(reportData, { transaction: t })
    .then(report => report.dataValues)
    .then(report => {
      emailData.report = {
        reporter: reporterObj,
        offender: offenderObj,
        offence: report.offence,
        details: report.details
      };
    })
    .then(report => {
      const data = adminObjs.map(adminObj => ({
        userId: adminObj.userId, // this should be an admin id
        type: 'report',
        reportId: report.reportId,
        message: `@${reporterObj.username} reported @${offenderObj.username} for ${report.offence}`,
      }));

      return Notification.bulkCreate(data, { transaction: t, validate: true })
        .then(async () => {
          data.forEach((notif, index) => {
            const admin = adminObjs.find(admin => admin.userId === notif.userId);
            emailData.recipient = admin;

            SocketMethods.emitNotification(notif);
            
            notifyByEmail(res, {notif, emailData})
              .then(mailSent => {
                notif.mailSent = mailSent;
                data[index] = notif;
                console.log(`Sent email to ${admin.email}.`);
              });
            //
          });

          await Promise.all(emails);
          return Object.assign(report, { notification: data });
        });
    }))
    .catch(err => {
      console.error(err);
      e.status = 500;
      e.message = 'A technical error occured. Contact support.';
      throw e;
    });
};
