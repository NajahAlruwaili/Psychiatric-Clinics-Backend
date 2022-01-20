const express= require("express");
const consultantRoute= express.Router();

// updConsultant
const {addConsultant,getConsultant,delConsultant}= require("../controllers/consultant");
const {authentication} = require("../middleware/authentication");


consultantRoute.post("/Consultant",authentication, addConsultant);
consultantRoute.get("/Consultant",authentication, getConsultant);
consultantRoute.delete("/Consultant/:id",authentication, delConsultant);
// consultantRoute.put("/updConsultant/:id",authentication, updateAbout);updateAbout
// consultantRoute.put("/profAbout",authentication, updateAboutYou);
// consultantRoute.put("/profImg",authentication, updateImg);




module.exports= consultantRoute ;
