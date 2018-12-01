const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const bodyParser = require('body-parser');
// Set up a default port, configure mongoose, configure our middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets if in production (running on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"));
}

// enable CORS, use:
// https://enable-cors.org/server_expressjs.html
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});

// // Routing
// var videosController = require("./controllers/videosController");
// var router = new express.Router();
// // Define any API routes first
// // Get saved articles
// router.get("/api/saved", videosController.find);
// // Save articles
// router.post("/api/saved", videosController.insert);
// // delete saved articles
// router.delete("/api/saved/:id", videosController.delete);
// // Send every other request to the React app
// router.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.use(router);
app.use(routes);

// Connect mongoose to our database
const db = process.env.MONGODB_URI || "mongodb://localhost/learningAppYouTube"


mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});