const Posts = require('../../../models/Posts')

async function postCreate({
  title,
  message,
  user_id,
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

    return post
  } catch (error) {
    console.error(error)
  }
}

module.exports = postCreate