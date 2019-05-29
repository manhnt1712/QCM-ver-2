var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connecting People ' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/', function (req, res) {
  var loggedInMember = req.session || {};
  var responseData = {
    'title': 'Express',
    'username': loggedInMember.username,
    'fullName': loggedInMember.fullName,
    'avatarUrl': loggedInMember.avatarUrl
  }
  res.render('index', responseData);
});

module.exports = router;
