const User = require('../../../models/User')
const Posts = require('../../../models/Posts')

async function getuser({ id }) {
  try {
    if (id) {
      const user = await User.findOne({
        attributes: ['name', 'email', 'password', 'user_name'],
        where:
        {
          id
        },
        include: [
          {
            model: Posts
          }
        ]
      })
      return user
    }

    const users = await User.findAll({
      include: [
        {
          model: Posts,
          as: 'posts'
        }
      ]
    });

    return users

  } catch (error) {
    console.error(error)
  }
}

module.exports = getuser