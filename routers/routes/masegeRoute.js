const express = require("express");
const masegeRoute = express.Router();


const { sendMasege,getMasege } = require("../controllers/masege");
const {authentication} = require("../middleware/authentication");



masegeRoute.post("/Amasege",authentication, sendMasege);
masegeRoute.get("/Amasege",authentication, getMasege);



module.exports =  masegeRoute