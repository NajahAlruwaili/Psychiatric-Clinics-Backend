const mongoose= require("mongoose");

const userModel= new mongoose.Schema({
    UserName: {type: String },
    Email: {type:String , unique:true},
    Pass: {type:String},
});

module.exports= mongoose.model("userModel",userModel);