const mongoose= require("mongoose");

const userModel= new mongoose.Schema({
    UserName:   {type:String},
    Email:      {type:String, unique:true},
    Pass:       {type:String},
    favorite:  [{type:mongoose.Schema.Types.ObjectId, ref: "videoModel"}],
    admin:      {type:Number}


});

module.exports= mongoose.model("userModel",userModel);