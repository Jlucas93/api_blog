const { verify } = require('jsonwebtoken')

async function verifyToken(req, res, next) {
  console.log('Sou o middleware de verifyToken')
  return next()
}

module.exports = verifyToken