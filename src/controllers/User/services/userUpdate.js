const { User } = require('../../../database/models')
const bcrypt = require('bcrypt')

module.exports = async function userCreate({
  name,
  user_name,
  email,
  password,
  id
}) {
  try {
    const user = await User.findOne({ where: { id } })

    const hash = password ? bcrypt.hashSync(password, 10) : null

    await user.update({
      name,
      user_name,
      email,
      password: hash ? hash : user.password
    })

    return user
  } catch (error) {
    console.error(error)
  }
} 