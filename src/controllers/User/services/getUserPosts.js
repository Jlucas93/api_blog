const Posts = require('../../../models/Posts')
const Categories = require('../../../models/Categories')

async function getUserPosts({
  user_id
}) {
  try {

    const posts = await Posts.findAll({
      where: { user_id },
      include: [
        {
          model: Categories,
          as: 'categories',
          through: { attributes: [] }
        },
      ],
    });

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

module.exports = getUserPosts