const router = require('express').Router()

const {
  addEvent,
  getAllEvents,
  getEvent,
  editEvent,
  deleteEvent
} = require('../controllers/event.controller')

router.get('/', getAllEvents)
router.get('/:id', getEvent)
router.post('/new', addEvent)
router.put('/:id', editEvent)
router.delete('/:id', deleteEvent)

module.exports = router