const router = require("express").Router();

const {
  getAllTutors,
  getTutor,
  addTutor,
  updateTutor,
  deleteTutor,
} = require("../controllers/tutor.controller");

router.get("/", getAllTutors);
router.get("/:id", getTutor);
router.post("/add", addTutor);
router.put("/:id", updateTutor);
router.delete("/:id", deleteTutor);

module.exports = router;
