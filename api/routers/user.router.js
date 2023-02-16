const router = require('express').Router()

const {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/new', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
