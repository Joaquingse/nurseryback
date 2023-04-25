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

async function updatePassword(req, res) {
  const { currentP, newP } = req.body
  const user = await Users.findById(req.params.id)
  const match = await bcrypt.compare(currentP,user.password)
  if(!match){
    return res.status(401).json({message: "El password no existe"})
  } 
  user.password = bcrypt.hashSync(newP,10)
  user.save()
  res.json({message: "¡Password actualizado!"})
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  updatePassword
};
