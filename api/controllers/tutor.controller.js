const Tutors = require("../models/tutor.model");

function getAllTutors(req, res) {
  Tutors.find(req.query)
    .then((tutors) => res.json(tutors))
    .catch((err) => res.json(err));
}

function getTutor(req, res) {
  Tutors.findById(req.params.id)
    .then((tutor) => res.json(tutor))
    .catch((err) => res.json(err));
}

function addTutor(req, res) {
  Tutors.create(req.body)
    .then((tutor) => res.json(tutor))
    .catch((err) => res.json(err));
}

function updateTutor(req, res) {
  Tutors.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((tutor) => res.json(tutor))
    .catch((err) => res.json(err));
}

function deleteTutor(req, res) {
  Tutors.findByIdAndDelete(req.params.id)
    .then((tutor) => res.json(tutor))
    .catch((err) => res.json(err));
}

module.exports = {
  getAllTutors,
  getTutor,
  addTutor,
  updateTutor,
  deleteTutor
};
