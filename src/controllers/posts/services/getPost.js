const Posts = require('../../../models/Posts')
const User = require('../../../models/User')
const Categories = require('../../../models/Categories')

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
          },
          {
            model: Categories,
            as: 'categories',
            through: { attributes: [] }
          },
        ]
      })

      return post
    }

    const posts = await Posts.findAll({
      include: [
        {
          model: Categories,
          as: 'categories',
          through: { attributes: [] }
        },
      ]
    })

    const result = posts.map((post) => ({
      id: post.id,
      title: post.title,
      message: post.message,
      user_id: post.user_id,
      likes: post.likes,
      publish_date: post.createdAt,
      categories: post.categories?.map((category) => (category.name))
    }))

    return result


  } catch (error) {
    console.error(error)
  }
}

module.exports = postCreate