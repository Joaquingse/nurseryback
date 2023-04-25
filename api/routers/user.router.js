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
  updatePassword,
  deleteUser,  
} = require('../controllers/user.controller')

router.get('/', authUser, getAllUsers)
router.get('/:id', authUser, getUser)
router.post('/new', authUser, checkOwner, createUser)
router.post('/:id', authUser, updatePassword)
router.put('/:id', authUser, updateUser)
router.delete('/:id', authUser, checkAdmin, deleteUser)

module.exports = router
