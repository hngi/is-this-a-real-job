var nodemailer = require('nodemailer');
import { EMAIL_ADDR, EMAIL_PASSWORD } from '../config/constants';

export async function sendMail(recipientAddr, title, messageBody) {
  let success;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ADDR,
      pass: EMAIL_PASSWORD
    }
  });
  
  var mailOptions = {
    from: `ITARJ Notifications <${EMAIL_ADDR}>`,
    to: recipientAddr,
    subject: title,
    html: messageBody // html body
  };
  
  const info = await transporter.sendMail(mailOptions);

    if (!info) {
      console.log(error);
      success = false;
    } else {
      console.log('Email sent: ' + info.response);
      success = true;
    }

  return success;
}
