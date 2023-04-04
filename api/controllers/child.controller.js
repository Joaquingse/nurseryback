const Child = require("../models/child.model");

function getChildren(req, res) {
  Child.find(req.query)
    .populate("tutors nursery")
    .then((children) => res.json(children))
    .catch((err) => res.json(err));
}

function getChild(req, res) {
  Child.findById(req.params.id)
    .populate("tutors nursery")
    .then((child) => res.json(child))
    .catch((err) => res.json(err));
}

function addChild(req, res) {
  Child.create(req.body)
    .then((child) => res.json(child))
    .catch((err) => res.json(err));
}

function updateChild(req, res) {
  Child.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .populate("tutors")
    .then((child) => res.json(child))
    .catch((err) => res.json(err));
}

function deleteChild(req, res) {
  Child.findByIdAndDelete(req.params.id)
    .then((child) => res.json(child))
    .catch((err) => res.json(err));
}


module.exports = {
  getChild,
  getChildren,
  addChild,
  updateChild,
  deleteChild,
};
