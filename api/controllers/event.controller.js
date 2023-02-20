const Event = require("../models/event.model");

function addEvent(req, res) {
  Event.create(req.body)
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
}

function getAllEvents(req, res) {
  Event.find(req.query)
    .then((events) => res.json(events))
    .catch((err) => res.json(err));
}

function getEvent(req, res) {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
}

function editEvent(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
}

function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
}

module.exports = {
  addEvent,
  getAllEvents,
  getEvent,
  editEvent,
  deleteEvent
};
