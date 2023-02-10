const Users = require('../models/user.model');
const bcrypt = require('bcrypt');

function getUser(req, res) {
  res.json(res.locals.user)
}




module.exports = {
  getUser
}