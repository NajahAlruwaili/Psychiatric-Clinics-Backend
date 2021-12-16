const express= require("express");
const consultantRoute= express.Router();


const {addConsultant,getConsultant,delConsultant}= require("../controllers/consultant");


consultantRoute.post("/Consultant",addConsultant);
consultantRoute.get("/Consultant",getConsultant);
consultantRoute.delete("/Consultant/:id",delConsultant);




module.exports= consultantRoute ;
