var nodemailer = require('nodemailer');
import { EMAIL_ADDR, EMAIL_PASSWORD } from '../config/constants';

export function sendMail(recipientAddr, title, messageBody) {
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
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
