const Posts = require('../../../models/Posts')
const PostCategories = require('../../../models/PostCategories')

async function updatePost({
  post_id
}) {
  try {

    const post = await Posts.findOne({ where: { id: post_id } })

    if (!post) {
      return "Post not found"
    }

    const post_categories = await PostCategories.findAll({ where: { post_id } })

    if (post_categories.length > 0) {
      await PostCategories.destroy({ where: { post_id } })
    }

    await post.destroy()

    return 'Post Deleted'

  } catch (error) {
    console.error(error)
  }
}

module.exports = updatePost