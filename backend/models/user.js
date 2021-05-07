const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        trim:true,
        required:true,
        unique:true,
     },  
     password:{
        type:String,
        required:true,
        trim:true
      },
     firstName:{
         type:String,
         trim:true
     },
     lastName:{
         type: String,
         trim:true
     },
     email:{
         type:String,
         required:true,
         unique:true,
         trim:true
     } ,
     gender:{type:String},
     isAdmin:{type:Boolean},
     isCustomer:{type:Boolean},
     isRestricted:{type:Boolean},
     resetToken:{type:String,default:""},
     expireToken:"",
     history:{
         type:Array,
         default:[]
     }
});

UserSchema.methods.generatePasswordReset = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

const user = mongoose.model("user",UserSchema);
module.exports = user;