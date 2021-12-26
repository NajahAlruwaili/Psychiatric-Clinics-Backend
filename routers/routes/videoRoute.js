const express = require("express");
const videoRoute = express.Router();

const { getvideo, postvideo, deletevideo, } = require("../controllers/video");
const {authentication} = require("../middleware/authentication");


videoRoute.get("/video",authentication,  getvideo);
videoRoute.post("/video",authentication,  postvideo);
videoRoute.delete("/video/:id",authentication,  deletevideo);
// videoRoute.post("/commint/:id",authentication,  postCommint);postCommint, deletCommint
// videoRoute.put("/commint/:id",authentication,  deletCommint);


module.exports = videoRoute;