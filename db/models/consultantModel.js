const mongoose= require("mongoose");

const consultantModel= new mongoose.Schema({
    Name:       {type:String, require:true},
    specialty:  {type:String},
    aboutYou:   {type:String},
    img:        {type:String},
    user:       {type:mongoose.Schema.Types.ObjectId, ref:"userModel"}

});

module.exports= mongoose.model("consultantModel",consultantModel);