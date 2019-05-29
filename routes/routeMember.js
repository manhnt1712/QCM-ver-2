var express = require('express');
var router = express.Router();

var memberController=require('../controller/memberController')

router.get('/signup',function (req,res,next) {
    return res.render('member/signup');
})
router.get('/dashboard',function (req,res,next) {
    return resp.render('/member/dashboard');
})

router.post('/save',memberController.save)
router.post('/login',memberController.processLogin);
router.get('/login', memberController.login);

module.exports = router;