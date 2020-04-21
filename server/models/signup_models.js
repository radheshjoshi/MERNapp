var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signupSchema = new Schema({
    username:{
        type:String,
        required:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    email:{
        type:String,
        required:true
    }
})

var userdata =mongoose.model('userdata',signupSchema);
module.exports=userdata;