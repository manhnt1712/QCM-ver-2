var Member= require('../models/member');

exports.save=function (req,res) {
    var memberObj = new Member(req.body);
    memberObj.save(function (err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.redirect('/');
        }
    });

};

exports.login = function (req, resp) {
    resp.render('member/login');
}






exports.processLogin = function (req, resp) {
    console.log('Controllers before callback function')
    Member.authenticate(req.body.username, req.body.password, function (error, member) {
        if (error) {
            return resp.status(401).send(error);
        } else if(!member){
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return resp.send(err);
        } else {
            req.session.username = member.username;
            console.log('Controllers session user name:' + req.session.username +' = Member username:'+member.username);
          //  req.session.avatarUrl = member.avatarUrl;

            req.session.fullName = member.fullName;
            console.log('Controllers session full name:' + req.session.fullName +' = Member fullName'+member.fullName);
            console.log('Controllers Member info:' + req.session.username+ ' '+req.session.fullName);
            var responseData = {
                'title': 'Express',
                'username': member.username,
                'fullName': member.fullName,
                'memberId':member._id,

            }
            console.log('Controllers response Data username:' + responseData.username +responseData.avatarUrl);
            resp.render('member/home', responseData);

        }
    });
}