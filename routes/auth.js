const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/dashboard',
  failureRedirect: '/signup'
}));

module.exports = router;
