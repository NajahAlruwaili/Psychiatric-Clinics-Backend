const express = require("express");
const postRoute = express.Router();


const { addpost, getpost, deletepost } = require("../controllers/post");



postRoute.post("/post", addpost);
postRoute.get("/post", getpost);
postRoute.delete("/post/:id", deletepost);

module.exports =  postRoute