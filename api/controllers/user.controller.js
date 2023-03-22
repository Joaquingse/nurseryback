const Users = require("../models/user.model");
const bcrypt = require("bcrypt");

function getUser(req, res) {
  Users.findById(req.params.id)
    .populate("nursery")
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
}

function getAllUsers(req, res) {
  Users.find(req.query)
    .populate("nursery")
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

function createUser(req, res) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(
      req.body.password,
      10
    );
  }
  Users.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
}

function updateUser(req, res) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(
      req.body.password,
      10
    );
  }
  Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}

function deleteUser(req, res) {
  Users.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
