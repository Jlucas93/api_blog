const Posts = require('../../../models/Posts')
const User = require('../../../models/User')
const Categories = require('../../../models/Categories')

async function postCreate({
  offset,
  limit,
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
      offset,
      limit,
      order: [['created_at', 'ASC']],
      include: [
        {
          model: Categories,
          as: 'categories',
          through: { attributes: [] }
        },
      ]
    })

    const total_posts = await Posts.count()

    const result = posts.map((post) => ({
      id: post.id,
      title: post.title,
      message: post.message,
      user_id: post.user_id,
      likes: post.likes,
      publish_date: post.createdAt,
      categories: post.categories?.map((category) => (category.name))
    }))

    return { result, total_posts }


  } catch (error) {
    console.error(error)
  }
}

module.exports = postCreate