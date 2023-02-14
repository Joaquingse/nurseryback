const router = require("express").Router();

const { 
  getChild,
  getChildren,
  addChild,
  updateChild,
  deleteChild
 } = require("../controllers/child.controller");

router.get('/', getChildren)
router.get('/:id', getChild)
router.post('/add', addChild)
router.put('/:id', updateChild)
router.delete('/:id', deleteChild)

module.exports = router;
