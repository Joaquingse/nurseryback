const router = require('express').Router()
const authRouter = require('./auth.router')
const userRouter = require('./user.router')


router.use('/auth', authRouter)
router.use('/user', userRouter)

module.exports = router