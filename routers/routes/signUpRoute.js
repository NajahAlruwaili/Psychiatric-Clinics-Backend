const express= require("express");
const signUpRoute= express.Router();


const {addNewUser}= require("../controllers/signUp")


signUpRoute.post("/signUp", addNewUser)


module.exports= signUpRoute ;