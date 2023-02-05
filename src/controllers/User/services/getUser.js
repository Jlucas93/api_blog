import User from '../../../database/models/user.js'

export default async function getuser({ id }) {
  try {
    if (id) {
      const user = await User.findOne({
        attributes: ['name', 'email', 'password', 'user_name'],
        where:
        {
          id
        }
      })

      return user
    }

    const users = await User.findAll({ attributes: ['name', 'email', 'password', 'user_name'] })

    return users

  } catch (error) {
    console.error(error)
  }
}