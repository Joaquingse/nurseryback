const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')
// Creacion de middlewares para autenticar y realizar comprobaciones
// fx de usario autenticado
function authUser (req, res, next) {
//comprobacion por token de la autenticacion
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }
// Buscamos al user por el email y almacenamos los datos en el local storage
      UserModel.findOne({ email: token.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}

// comprobacion de rol de Admin para realizar fx de solo admin
function checkAdmin(req, res, next) {
  if (res.locals.user.role !== 'admin') { 
      return res.status(401).send('User not authorized')
  } else {
      next()
  }
}


module.exports = {
  authUser,
  checkAdmin
}