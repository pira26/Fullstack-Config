'use strict'

// first import our dependencies…
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config.js');

// and create our instances 
const app = express();
const router = express.Router();

// connect our database
// require('./server/models/models').connect(config.dbUrl);

// now configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// logger that outputs all requests into the console
app.use(morgan('combined'));

// to prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
 	res.setHeader('Access-Control-Allow-Credentials', 'true');
 	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
// and remove cacheing so we get the most recent comments
 	res.setHeader('Cache-Control', 'no-cache');
 	next();
});

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passports/sign-up');
const localLoginStrategy = require('./server/passports/login');
passport.use('signup', localSignupStrategy);
passport.use('login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middlewares/auth-check');
app.use('/api', authCheckMiddleware);

// now set the route path & initialize the API
router.get('/', (req, res) => {
 	res.json({ message: 'API Initialized!'});
});

// use our router configuration when we call /api
app.use('/api', router);

// starts the server and listens for requests
app.listen(config.port, () => {
 	console.log(`api running on port ${config.port}`);
});