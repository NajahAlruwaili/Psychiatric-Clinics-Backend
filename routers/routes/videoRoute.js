const express = require("express");
const videoRoute = express.Router();

const { getvideo, postvideo, deletevideo } = require("../controllers/video");

videoRoute.get("/video", getvideo);
videoRoute.post("/video", postvideo);
videoRoute.delete("/video/:id", deletevideo);

module.exports = videoRoute;