import User from '../../../database/models/user.js'
import bcrypt from 'bcrypt'

export default async function userCreate({
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