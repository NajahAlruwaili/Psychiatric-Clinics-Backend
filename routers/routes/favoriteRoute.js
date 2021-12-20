const express = require("express");
const favoriteRoute = express.Router();


const {getLike,addLike,deletLike} = require("../controllers/favorite");
const {authentication} = require("../middleware/authentication");


favoriteRoute.get("/favoritee",authentication, getLike);
favoriteRoute.post("/favor/:id",authentication, addLike);
favoriteRoute.delete("/unfavor/:id",authentication, deletLike);


module.exports = favoriteRoute;