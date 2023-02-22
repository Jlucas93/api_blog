const User = require('../../../models/User')
const bcrypt = require('bcrypt')

async function userCreate({
  name,
  user_name,
  email,
  password,
  id,
  is_admin
}) {
  try {
    const user = await User.findOne({ where: { id } })

    const hash = password ? bcrypt.hashSync(password, 10) : null

    await user.update({
      name,
      user_name,
      email,
      password: hash ? hash : user.password,
      is_admin: is_admin || user.is_admin
    })

    return user
  } catch (error) {
    console.error(error)
  }
}

module.exports = userCreate