import User from '../../../database/models/user.js'

export default async function userDelete({ id }) {
  try {
    const deleted_user = await User.destroy({ where: { id } })

    return deleted_user

  } catch (error) {
    return console.error(error)
  }
}