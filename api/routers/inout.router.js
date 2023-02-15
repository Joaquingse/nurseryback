const router = require('express').Router()

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

router.get('/drops', getDrops)
router.get('/picks', getPicks)
router.post('/drop', dropOff)
router.post('/pick', pickUp)
router.put('/:id', editDrop)
router.put('/:id', editPick)
router.delete('/:id', deleteDrop)
router.delete('/:id', deletePick)

module.exports = router