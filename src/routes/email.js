var nodemailer = require('nodemailer');

res.render('list.ejs', {posts: posts}, function(err, list){
  // 
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'feranmiakinlade@gmail.com',
    pass: 'af.27111998'
  }
});

var mailOptions = {
  from: 'feranmiakinlade@gmail.com',
  to: 'feranmiakinlade@outlook.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
