const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: String,
  date: { type: Date, default: Date.now },
  videoId:{ type: String, required: true },
  description: { type: String, required: true }
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
