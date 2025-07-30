import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
    }
});
const User=mongoose.nodle('User',mongooseSchema);;
export default User;