const mongoose= require("mongoose");

const consultantModel= new mongoose.Schema({
    Name:       {type:String, require:true},
    specialty:  {type:String, require:true},
    aboutYou:   {type:String},
    img:        {type:String},
    user:       {type:mongoose.Schema.Types.ObjectId, ref:"userModel"},
    // ifAdmin:    { type: Boolean, required: true },


});

module.exports= mongoose.model("consultantModel",consultantModel);