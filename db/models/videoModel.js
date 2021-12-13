const mongoose = require("mongoose");

const videoModel = new mongoose.Schema({
  description: { type: String },
  video: { type: String },
  user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"},
});

module.exports = mongoose.model("videoModel", videoModel);
