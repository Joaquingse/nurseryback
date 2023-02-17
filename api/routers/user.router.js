const router = require('express').Router()
const { authUser,
  checkAdmin,
  checkOwner
 } = require('../utils/index')

const {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller')

router.get('/', authUser, checkOwner, getAllUsers)
router.get('/:id', authUser, getUser)
router.post('/new', authUser, checkOwner, createUser)
router.put('/:id', authUser, updateUser)
router.delete('/:id', authUser, checkAdmin, deleteUser)

module.exports = router
