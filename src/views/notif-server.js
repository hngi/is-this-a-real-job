const express = require('express');
const app = express();
app.set('views', __dirname);
app.set('view engine', 'ejs');

const notificationData = {
 type: 'comment',
 author: {
   name: 'Risikat',
   username: 'rizqah'
 },
 recipient: {
   name: 'Feranmi',
   username: 'stacalpha'
 }
}

app.get("/", (req, res)=> {
 res.render(
   "notificationEmail",
   notificationData
 );
});

const port = 3000;
app.listen(port, () => {
 console.log(127.0.0.1:5501/);
});