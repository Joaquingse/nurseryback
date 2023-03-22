const router = require("express").Router();
const { authUser,
  checkAdmin,
  checkOwner,
  checkChief
 } = require('../utils/index')

const {
  getAllTutors,
  getTutor,
  addTutor,
  updateTutor,
  deleteTutor,
} = require("../controllers/tutor.controller");

router.get("/", authUser, getAllTutors);
router.get("/:id", authUser, getTutor);
router.post("/add", authUser, checkOwner, addTutor);
router.put("/:id", authUser, checkChief, updateTutor);
router.delete("/:id", authUser, checkOwner, deleteTutor);

module.exports = router;
