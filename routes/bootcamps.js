const express = require("express");
/**Import Controller */
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
const router = express.Router();

/**Before Controller Method */

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "Show all bootcamps" });
// });

// router.get("/:id", (req, res) => {
//   res.status(200).json({ success: true, msg: `GET bootcamp ${req.params.id}` });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "Create new bootcamps" });
// });

// router.put("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
// });

/**Afrer Controller Method */

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
