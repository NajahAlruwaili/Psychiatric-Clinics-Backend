const mongoose= require("mongoose");

const masegeModel= new mongoose.Schema({

    Names:         {type:String },
    EmailMsgs:     {type:String },
    PhoneMsgs:     {type:String },
    DoctorNames:   {type:String },
    Titles:        {type:String },
    MasgeIss:      {type:String },
    user:          {type: mongoose.Schema.Types.ObjectId, ref:"userModel"},


});

module.exports= mongoose.model("masegeModel",masegeModel);









