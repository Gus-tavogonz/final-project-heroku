const router = require("express").Router();
const videosController = require("../../controllers/videosController");

// Matches with "/api/videos"
router.route("/")
  .get(videosController.find)
  .post(videosController.insert)
  
// Matches with "/api/videos/:id"
router
  .route("/:id")
  .get(videosController.findById)
  //.put(videosController.insert)
  .delete(videosController.remove);

module.exports = router;
