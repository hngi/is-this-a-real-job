import { EMAIL_ADDR, EMAIL_PASSWORD } from '../config/constants';
import { findSingleUser } from '../services/userServices';

const nodemailer = require('nodemailer');

export async function sendMail(recipientAddr, title, messageBody) {
  let success;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ADDR,
      pass: EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: `ITARJ Notifications <${EMAIL_ADDR}>`,
    to: recipientAddr,
    subject: title,
    html: messageBody // html body
  };

  const info = await transporter.sendMail(mailOptions);

  if (!info) {
    console.log('error in transporter.sendMail(mailOptions)');
    success = false;
  } else {
    console.log(`Email sent: ${info.response}`);
    success = true;
  }

  return success;
};

export const notifyByEmail = async (res, notif) => {
  let mailSent;

  try {
    if (notif.type === 'comment') {
      notif.title = 'One New Comment On Your Job Invite';
    } else notif.title = 'Your Job Invite Was Upvoted';

    notif.recipient = await findSingleUser({ userId: notif.userId });
    notif.recipient = notif.recipient.dataValues;

    // Use callback syntax for res.render to recieve the html text into a variable.
    res.render('notificationEmail', notif, (error, renderedEmail) => {
      if (error) throw error;

      mailSent = sendMail(notif.recipient.email, notif.title, renderedEmail);
    });

    return mailSent;
  } catch (error) {
    mailSent = false;
    console.log(error);
    return mailSent;
  }
};
