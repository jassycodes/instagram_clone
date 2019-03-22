const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin');
}

router.get('/', function(req, res, next) {
  return res.render('index');
});

// router.get('/photos', isLoggedIn, function(req, res, next) {
//   return res.render('index');
// });

// router.get('/photos', function(req, res, next) {
//   return res.render('index');
// });

router.get('/photos', function(req, res, next) {
  return res.render('index');
});

router.get('/posts', function(req, res, next) {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('index');
});

router.get('/login', (req, res, next) => {
  res.render('index');
});

router.get('/dashboard', (req, res, next) => {
  res.render('index');
});

module.exports = router;
