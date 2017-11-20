const User = require('../models/user');
const PassportLocalStrategy = require('passport-local').Strategy;

// Return the Passport Local Strategy object
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        name: req.body.name.trim(),
        avatar: req.body.avatar.trim(),
        address: req.body.address,
        age: req.body.age.trim()
    };

    const newUser = new User(userData);
    newUser.save((err) => {
      if (err) { 
          return done(err); 
      }
      return done(null);
    });
});