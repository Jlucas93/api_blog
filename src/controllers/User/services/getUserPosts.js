const Posts = require('../../../models/Posts')
const Categories = require('../../../models/Categories')

async function getUserPosts({
  offset,
  limit,
  user_id
}) {
  try {

    const posts = await Posts.findAll({
      offset,
      limit,
      where: { user_id },
      order: [['created_at', 'ASC']],
      include: [
        {
          model: Categories,
          as: 'categories',
          through: { attributes: [] }
        },
      ],
    });

    const total_posts = await Posts.count({
      where: {
        user_id
      }
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

    return { result, total_posts }

  } catch (error) {
    console.error(error)
  }
}

module.exports = getUserPosts