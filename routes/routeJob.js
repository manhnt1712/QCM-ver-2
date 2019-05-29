var express = require('express');
var router = express.Router();

var jobController=require('../controller/jobController')
router.get('/createJob', function (req,resp) {
    resp.render('Job/create')

});
router.get('/findJob', function (req,resp) {
    resp.render('Job/find')

});

router.post('/createJob',jobController.createJob)
// router.post('/findJob',jobController.findJob())
module.exports = router;