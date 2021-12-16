const express = require("express");
const postRoute = express.Router();


const { addpost, getpost, deletepost } = require("../controllers/post");
const {authentication} = require("../middleware/authentication");



postRoute.post("/post",authentication, addpost);
postRoute.get("/post",authentication, getpost);
postRoute.delete("/post/:id",authentication, deletepost);


module.exports =  postRoute