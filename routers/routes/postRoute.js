const express = require("express");
const postRoute = express.Router();


const { addpost, getpost, deletepost, updatePost } = require("../controllers/post");
const {authentication} = require("../middleware/authentication");



postRoute.post("/post",authentication, addpost);
postRoute.get("/post",authentication, getpost);
postRoute.delete("/post/:id",authentication, deletepost);
postRoute.put("/post/:id",authentication, updatePost);



module.exports =  postRoute