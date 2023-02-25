const User = require('../../../models/User')
const Posts = require('../../../models/Posts')

async function getuser({ offset, limit, id }) {
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
      offset,
      limit,
      order: [['created_at', 'ASC']],
    })

    const result = users.map((user) => ({
      name: user.name,
      user_name: user.user_name,
      email: user.email,
      created_at: user.createdAt,
    }))

    const total_users = await User.count()

    return { result, total_users }

  } catch (error) {
    console.error(error)
  }
}

module.exports = getuser