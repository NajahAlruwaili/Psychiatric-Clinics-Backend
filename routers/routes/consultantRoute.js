const express= require("express");
const consultantRoute= express.Router();


const {addConsultant,getConsultant,delConsultant}= require("../controllers/consultant");
const {authentication} = require("../middleware/authentication");


consultantRoute.post("/Consultant",authentication, addConsultant);
consultantRoute.get("/Consultant",authentication, getConsultant);
consultantRoute.delete("/Consultant/:id",authentication, delConsultant);



module.exports= consultantRoute ;
