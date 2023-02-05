const { User } = require('../../../database/models')

module.exports = async function userDelete({ id }) {
  try {
    const deleted_user = await User.destroy({ where: { id } })

    return deleted_user

  } catch (error) {
    return console.error(error)
  }
}