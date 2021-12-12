const express= require("express");
const loginRoute= express.Router();


const {login}= require("../controllers/login");


loginRoute.post("/login",login);
loginRoute.get("/login",login);



module.exports= loginRoute ;