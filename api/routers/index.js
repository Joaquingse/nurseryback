const router = require('express').Router()
const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const nurseryRouter = require('./nursery.router')
const tutorRouter = require('./tutor.router')
const childRouter = require('./child.router')


router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/nursery', nurseryRouter)
router.use('/tutor', tutorRouter)
router.use('/child', childRouter)

module.exports = router