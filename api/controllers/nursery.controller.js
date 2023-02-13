const Nurseries = require("../models/nursery.model");

function getNursery(req, res) {
  Nurseries.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function getAllNurseries(req, res) {
  Nurseries.find(req.query)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function addNursery(req, res) {
  Nurseries.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function updateNursery(req, res) {
  Nurseries.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function deleteNursery(req, res) {
  Nurseries.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

module.exports = {
  getNursery,
  getAllNurseries,
  addNursery,
  updateNursery,
  deleteNursery
};
