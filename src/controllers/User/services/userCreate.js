const User = require('../../../models/User')
const bcrypt = require('bcrypt')

async function userCreate({
  name,
  user_name,
  email,
  password,
  is_admin
}) {
  try {

    if (!name || !user_name || !email || !password) {
      return 'Invalid data'
    }

    const verify_email = await User.findOne({ where: { email } })
    const verify_user_name = await User.findOne({ where: { user_name } })

    console.log(verify_email)
    console.log(verify_user_name)

    if (verify_email || verify_user_name) {
      return `Email ${email} or ${user_name} already exists`
    }
    if (verify_user_name) {
      return `User name ${user_name} already exists`
    }

    const hash = bcrypt.hashSync(password, 10)

    const user = await User.create({
      name,
      user_name,
      email,
      password: hash,
      is_admin: is_admin ? true : false
    })

    return user
  } catch (error) {
    console.error(error)
  }
}

module.exports = userCreate