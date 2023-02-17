const Posts = require('../../../models/Posts')
const User = require('../../../models/User')

async function postCreate({
  id
}) {
  try {
    if (id) {
      const post = await Posts.findOne({
        where: { id },
        include: [
          {
            model: User,
            as: 'user'
          }
        ]
      })

      return post
    }

    const posts = await Posts.findAll({
      include: [
        {
          model: User,
          as: 'user'
        }
      ]
    })

    return posts


  } catch (error) {
    console.error(error)
  }
}

module.exports = postCreate