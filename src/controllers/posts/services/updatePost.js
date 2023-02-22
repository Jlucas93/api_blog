const Posts = require('../../../models/Posts')
const PostCategories = require('../../../models/PostCategories')

async function updatePost({
  title,
  message,
  likes,
  category_ids,
  id
}) {
  try {

    if (category_ids) {
      await PostCategories.destroy({ where: { post_id: id } })

      const postCategories = category_ids
        .map((category_id) => ({ post_id: id, category_id: category_id }))

      await PostCategories.bulkCreate(postCategories)
    }
    const post = await Posts.update(
      {
        title,
        message,
        likes,
      },
      { where: { id } }
    )
    return post
  } catch (error) {
    console.error(error)
  }
}

module.exports = updatePost