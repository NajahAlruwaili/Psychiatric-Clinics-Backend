const express = require("express");
const masegeRoute = express.Router();


const { sendMasege,getMasege,deletemsg } = require("../controllers/masege");
const {authentication} = require("../middleware/authentication");



masegeRoute.post("/Amasege",authentication, sendMasege);
masegeRoute.get("/Amasege",authentication, getMasege);
masegeRoute.delete("/Amasege/:id",authentication, deletemsg);




module.exports =  masegeRoute