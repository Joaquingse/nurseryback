const router = require('express').Router()
const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const nurseryRouter = require('./nursery.router')
const tutorRouter = require('./tutor.router')
const childRouter = require('./child.router')
const eventRouter = require('./event.router')
const checkRouter = require('./inout.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/nursery', nurseryRouter)
router.use('/tutor', tutorRouter)
router.use('/child', childRouter)
router.use('/event', eventRouter)
router.use('/inout', checkRouter)

module.exports = router