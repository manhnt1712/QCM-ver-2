var Job= require('../models/job');

exports.createJob=function (req,res) {
    var jobObj = new Job(req.body);
    jobObj.jobOwner=req.loggedInMember._id;
    jobObj.save(function (err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.redirect('/');
        }
    });

};

// exports.findJob=function (req,res) {
//     return res.redirect('/');
// }