const router = require('express').Router()

const {
  getNursery,
  getAllNurseries,
  addNursery,
  updateNursery,
  deleteNursery
} = require('../controllers/nursery.controller')

router.get('/', getAllNurseries)
router.get('/:id', getNursery)
router.post('/add', addNursery)
router.put('/:id', updateNursery)
router.delete('/:id', deleteNursery)


module.exports = router