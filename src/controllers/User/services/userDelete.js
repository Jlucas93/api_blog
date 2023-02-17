const User = require('../../../models/User')

async function userDelete({ id }) {
  try {
    const deleted_user = await User.destroy({ where: { id } })

    return deleted_user

  } catch (error) {
    return console.error(error)
  }
}

module.exports = userDelete