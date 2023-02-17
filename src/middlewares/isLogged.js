const jwt = require('jsonwebtoken');

async function isLogged(req, res, next) {

  const token = req.headers["authorization"]

  if (!token) {
    return res.status(403).send("A token is required for authentication")
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)

    req.user = decoded.data

    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: "Invalid Token" })
  }
}

module.exports = isLogged