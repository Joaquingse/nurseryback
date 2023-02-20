const router = require('express').Router()
const { authUser,
  checkAdmin,
  checkOwner,
  checkChief
 } = require('../utils/index')

const {
  getNursery,
  getAllNurseries,
  addNursery,
  updateNursery,
  deleteNursery
} = require('../controllers/nursery.controller')

router.get('/', authUser, checkOwner, getAllNurseries)
router.get('/:id', authUser, checkOwner, getNursery)
router.post('/add', authUser, checkOwner, addNursery)
router.put('/:id', authUser, checkOwner, updateNursery)
router.delete('/:id', authUser, checkOwner, deleteNursery)


module.exports = router