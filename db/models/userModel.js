const mongoose= require("mongoose");

const userModel= new mongoose.Schema({
    userName: {type: String },
    Email: {type:String , unique:true},
    pass: {type:String},
});

module.exports= mongoose.model("userModel",userModel);