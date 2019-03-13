const express = require('express');
const router = express.Router();

router.get('/all', function(req, res, next) {
  const photos = ['https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg']
  res.send(200, JSON.stringify(photos));
});

router.get('*', function(req, res, next) {
  return res.render('index');
});

module.exports = router;
