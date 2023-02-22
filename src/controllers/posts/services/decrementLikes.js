const Post = require('../../../models/Posts')

async function incrementLikes({ id }) {
  const transaction = await Post.sequelize.transaction()

  try {

    const post = await Post.findOne({ where: { id }, transaction })

    if (!post) {
      return 'Post not found'
    }

    const updatedPost = await post.decrement('likes', { transaction })

    await transaction.commit()

    return updatedPost
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

module.exports = incrementLikes