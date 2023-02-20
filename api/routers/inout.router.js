const router = require('express').Router()
const { authUser,
  checkAdmin,
 } = require('../utils/index')

const {
  dropOff,
  pickUp,
  getDrops,
  getPicks,
  editDrop,
  editPick,
  deleteDrop,
  deletePick
} = require('../controllers/inout.controller')

router.get('/drops', authUser, getDrops)
router.get('/picks', authUser, getPicks)
router.post('/drop', authUser, dropOff)
router.post('/pick', authUser, pickUp)
router.put('/:id', authUser, checkAdmin, editDrop)
router.put('/:id', authUser, checkAdmin, editPick)
router.delete('/:id', authUser, checkAdmin, deleteDrop)
router.delete('/:id', authUser, checkAdmin, deletePick)

module.exports = router