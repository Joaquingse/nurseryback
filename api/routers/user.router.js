const router = require('express').Router()

const {
  getUser
} = require('../controllers/user.controller')

router.get('/info', getUser)

module.exports = router
