const Users = require('../models/user.model');
const bcrypt = require('bcrypt');

function getUser(req, res) {
  console.log(req.params)
  Users.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
}




module.exports = {
  getUser
}