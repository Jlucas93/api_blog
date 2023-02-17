const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../../models/User')

async function login({ user_name, password }) {

  const user = await User.findOne({ where: { user_name } })

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return 'User name or passward invalids'
  }

  const token = jwt.sign({ data: user }, process.env.SECRET_KEY, { expiresIn: '3h' })

  return { token, user }
}

module.exports = login