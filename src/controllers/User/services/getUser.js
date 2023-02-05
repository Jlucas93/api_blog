const { User } = require('../../../database/models')

module.exports = async function getuser({ id }) {
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