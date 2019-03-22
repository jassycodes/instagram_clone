const express = require('express');
const router = express.Router();
const Picture = require('../models/Picture');
var fs = require('fs');

router.get('/all', function(req, res, next) {
  const photos = [
  // 'https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg', 
  "https://meanmaureen.files.wordpress.com/2015/06/screen-shot-2015-06-09-at-3-21-33-pm.png",
  "http://www.thatericalper.com/wp-content/uploads/2017/01/dog-650299.jpg",
  "https://dogsbreedusa.online/cavachon/cavachon-puppies/",
  "https://i.pinimg.com/originals/88/04/99/880499fd0fa34463118b6f856ed06e79.jpg",
  "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/AdobeStock_176102563.jpeg"
  ]
  res.send(200, JSON.stringify(photos));
});

router.get('/puppies', function(req, res, next) {
  const photos = [
  // 'https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg', 
  "https://meanmaureen.files.wordpress.com/2015/06/screen-shot-2015-06-09-at-3-21-33-pm.png",
  "http://www.thatericalper.com/wp-content/uploads/2017/01/dog-650299.jpg",
  "https://dogsbreedusa.online/cavachon/cavachon-puppies/",
  "https://i.pinimg.com/originals/88/04/99/880499fd0fa34463118b6f856ed06e79.jpg",
  "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/AdobeStock_176102563.jpeg"
  ]
  res.send(200, JSON.stringify(photos));
});

router.post('/upload', function(req, res, next){
	// save photo uploaded
	// save path to photo in db along with uyser id
	console.log(req.body);
	console.log("hey you uploaded a photo!");
	// console.log("req: ", req);
	// console.log("req.body: ", req.body);
})

router.get('*', function(req, res, next) {
  return res.render('index');
});

module.exports = router;
