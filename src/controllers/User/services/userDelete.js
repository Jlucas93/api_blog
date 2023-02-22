const User = require('../../../models/User')

async function userDelete({ id }) {
  try {

    const user = await User.findOne({ where: { id } })

    if (!user) {
      return 'User not found'
    }

    user.destroy()

    return 'User deleted'

  } catch (error) {
    return console.error(error)
  }
}

module.exports = userDelete