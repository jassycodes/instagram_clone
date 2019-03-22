const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.post('/signup', passport.authenticate('local-signup', {
//   successRedirect: '/dashboard',
//   failureRedirect: '/signup'
// }));

router.post('/signup',
  passport.authenticate('local-signup'),
  function(req, res) {

    if(req.user){
    	console.log("successful sign up");
    	res.send(200);
    }
    else{
    	console.log("error signing up");
    	res.send(400);
    }
  });

router.post('/login',
  passport.authenticate('local-signin'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // res.redirect('/users/' + req.user.username);
    // res.redirect(200, 'https://localhost:5000/photos');
    if(req.user){
    	console.log("found");
    	res.send(200);
    }
    else{
    	console.log("not found");
    	res.send(400);
    	// res.redirect(200, 'https://localhost:5000/photos');
    }

    console.log("username: ", req.user.username)
  });

module.exports = router;
