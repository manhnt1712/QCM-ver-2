var mongoose = require('mongoose');
var jobSchema = new mongoose.Schema({


            jobCategories: {type: String,required:true, trim:true},
            jobDescribtion: {type:String, default:null},
            jobLocation: {type: String, required:true},
            jobTimeBegin: {type: String,required:true,trim:true},
            totalTime: {type: Number,required:true},
            salary:{type: Number, required:true},
            jobStatus: {type:Number, default: 1},
            FinishRate: {type:Number, min: 0 , max:10, default: null},
            jobAssign: {type: String},
            jobOwner: {type: String},



})

var jobModel = mongoose.model('jobs', jobSchema);
module.exports = jobModel;