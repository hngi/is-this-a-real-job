/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const { PORT } = require('./config/constants');
const { initRoutes } = require('./routes/routes');

const app = express();

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*'); //Don't think we need CORS here.
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.set('views', path.join(__dirname, 'views')); // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, '../public'))); // load local css and js files
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
const port = PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

export default app;
