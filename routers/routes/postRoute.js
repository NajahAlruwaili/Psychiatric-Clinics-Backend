const express = require("express");
const postRoute = express.Router();


const { addpost, getpost, deletpost } = require("../controllers/post");



postRoute.post("/post", addpost);
postRoute.get("/post", getpost);
postRoute.delete("/post/:id", deletpost);

module.exports =  postRoute