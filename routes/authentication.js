var Member = require('../models/member');
// Kiểm tra xem người dùng đã logged in hay chưa.
module.exports = function (req, resp, next) {
    if(req.session && req.session.username){
        console.log('Session success');
        console.log(req.session);
            Member.findOne({
            'username':req.session.username
        }, function (err, member) {
            if(member){

                req.loggedInMember = member;
                console.log('Called here1.' + req.loggedInMember.fullName);



            }next();
        })


    }else{
        console.log('Authen: req session' + req.session +'Authen: req session username ' + req.session.username);
        next();
    }
}