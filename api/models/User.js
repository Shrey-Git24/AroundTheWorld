const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        min:3,
        max:20,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        min:3,
        max:20,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    userName:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
        trim:true,
        lowercase:true,
        index:true
    },
    password:{
        type:String,
        required:true
    }


});

const UserModel = model("User", UserSchema);

module.exports = UserModel;