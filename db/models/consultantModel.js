const mongoose= require("mongoose");

const consultantModel= new mongoose.Schema({
    Name:       {type:String},
    specialty:  {type:String},
    aboutYou:   {type:String},
    img:        {type:String},

});

module.exports= mongoose.model("consultantModel",consultantModel);