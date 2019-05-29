var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({


        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        fullName: {
            type: String
        },
        avatarUrl: {
            type: String
        },
        email: {
            type: String
        },
        address: {
            type: String
        },
        phoneNumber: {
            type: String
        },

        workHourBegin: {
            type: String
        },
        workHourEnd: {
            type: String
        },
        date: {
            type: Array
        },
        jobToDo: {
            type: Array
        },
        jobToHire: {
            type: Array
        },



})
MemberSchema.statics.authenticate = function (username, password, callback) {
    console.log('Models authen member username parameter:'+username +' password:'+password)
    MemberModel.findOne({
        'username': username

    }, function (error, member) {
        if (error || !member) {
            var err = new Error('Member not found.');
            err.status = 401;
            return callback(err);
        } else {

            if (password === member.password) {
                console.log('Models authen info if password correct:'+username +' password:'+password)
                return callback(null, member);
            } else {
                var err = new Error('Worker not found.');
                err.status = 401;
                return callback(err);
            }
        }
    });
}

var MemberModel = mongoose.model('members', MemberSchema);
module.exports = MemberModel;