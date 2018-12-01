const router = require("express").Router();
const path = require("path");

const videoRoutes = require("./videos");




// Video routes
router.use("/videos", videoRoutes);


// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
