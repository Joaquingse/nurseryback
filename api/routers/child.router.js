const router = require("express").Router();

const { authUser,
  checkOwner,
  checkChief
 } = require('../utils/index')

const { 
  getChild,
  getChildren,
  addChild,
  updateChild,
  deleteChild,
  addTutor
 } = require("../controllers/child.controller");

router.get('/', authUser, getChildren)
router.get('/:id', authUser, getChild)
router.post('/add', authUser, checkOwner, addChild)
router.put('/:id', authUser, checkChief, updateChild)
router.delete('/:id', authUser, checkOwner, deleteChild)

module.exports = router;
