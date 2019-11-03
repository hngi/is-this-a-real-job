/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const Cookies = require('cookies');
const Keygrip = require('keygrip');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const http = require('http');
const socket = require('socket.io');
const { PORT, NODE_ENV, SECRET_KEY } = require('./config/constants');
const { initRoutes } = require('./routes/routes');
const { initSocketEvents } = require('./routes/events');
const passportSetup = require('./config/passport');

const { cloudinaryConfig } = require('./config/cloudinaryConfig');

const keys = Keygrip([SECRET_KEY]);

const app = express();
<<<<<<< HEAD
const server = http.createServer(app);
const io = socket(http);
=======
app.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookies: { secure: true }
}));
>>>>>>> auth-twitter

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
// Handle image upload
app.use(cors());
app.use('*', cloudinaryConfig);


app.set('views', path.join(__dirname, 'views')); // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, '../public'))); // load local css and js files
app.use(express.static(path.join(__dirname, './views/pageScripts'))); // load page scripts
app.use(express.static(path.join(__dirname, '../node_modules/socket.io-client/dist'))); // load page scripts
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(Cookies.express(keys));

initSocketEvents(io);

initRoutes(app);

const port = PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

io.listen(server);

export default app;
