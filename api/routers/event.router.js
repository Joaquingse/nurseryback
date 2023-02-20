const router = require('express').Router()
const { authUser,
  checkChief
 } = require('../utils/index')

const {
  addEvent,
  getAllEvents,
  getEvent,
  editEvent,
  deleteEvent
} = require('../controllers/event.controller')

router.get('/', authUser, getAllEvents)
router.get('/:id', authUser, getEvent)
router.post('/new', authUser, checkChief, addEvent)
router.put('/:id', authUser, checkChief, editEvent)
router.delete('/:id', authUser, checkChief, deleteEvent)

module.exports = router