const Posts = require('../../../models/Posts')
const PostCategories = require('../../../models/PostCategories')

async function postCreate({
  title,
  message,
  user_id,
  category_ids
}) {
  try {

    if (!title || !message || !user_id) {
      return 'Invalid data'
    }


    const post = await Posts.create({
      title,
      message,
      user_id,
      likes: 0,
    })

    if (category_ids) {
      const postCategories = category_ids
        .map((category_id) => ({ post_id: post.id, category_id: category_id }))

      await PostCategories.bulkCreate(postCategories)
    }

    return post
  } catch (error) {
    console.error(error)
  }
}

module.exports = postCreate