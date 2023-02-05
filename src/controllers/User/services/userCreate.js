const { User } = require('../../../database/models')
const bcrypt = require('bcrypt')

module.exports = async function userCreate({
  name,
  user_name,
  email,
  password,
}) {
  try {

    if (!name || !user_name || !email || !password) {
      return 'Invalid data'
    }

    const verify_email = await User.findOne({ where: { email } })

    if (verify_email) {
      return `Email ${email} already exists`
    }

    const hash = bcrypt.hashSync(password, 10)

    const user = await User.create({
      name,
      user_name,
      email,
      password: hash,
    })

    return user
  } catch (error) {
    console.error(error)
  }
} 