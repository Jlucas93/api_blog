const postCreate = require('../services/postCreate')
const getPost = require('../services/getPost')
const updatePost = require('../services/updatePost')
const postDelete = require('../services/postDelete')
const incrementLikes = require('../services/incrementLikes')
const decrementLikes = require('../services/decrementLikes')
class PostsController {

  async getPost(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({ message: 'Id is required' })
      }
      const post = await getPost({ id })

      if (!post) {
        return res.status(404).json({ error: "Post does not exist" })
      }

      return res.status(200).json(post)

    } catch (error) {
      console.error(error)
      return res.status(500).json('Internal Server Error')
    }

  }

  async getAllPosts(req, res) {
    try {
      let { page, perPage } = req.query

      page = parseInt(page, 10) || 1

      const limit = parseInt(perPage, 10) || 20

      const offset = (page - 1) * limit

      if (!req.user.is_admin) {
        return res.status(401).json({ msg: "Only admisn have acess" })
      }

      const { result, total_posts } = await getPost({ offset, limit, id: null });

      return res.status(200).json({
        posts: result,
        page,
        perPage: limit,
        totalPosts: total_posts,
        totalPages: Math.ceil(total_posts / limit),
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  async increaseLikes(req, res) {
    try {

      const { id } = req.params

      const post = await incrementLikes({ id })

      return res.status(200).json(post)

    } catch (error) {
      console.error(error)
      return res.status(500).json('Internal Server Error')
    }
  }

  async decreaseLikes(req, res) {
    try {

      const { id } = req.params

      const post = await decrementLikes({ id })

      return res.status(200).json(post)

    } catch (error) {
      console.error(error)
      return res.status(500).json('Internal Server Error')
    }
  }

  async create(req, res) {
    try {

      const { title, message, category_ids } = req.body
      const user = req.user

      const post = await postCreate({ title, message, user_id: user.id, category_ids })

      if (!post) {
        return res.status(400).json({ error: post })
      }

      return res.status(201).json({ post, message: "Post Created" })

    } catch (error) {
      console.error(error)
      return res.status(500).json('Internal Server Error')
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { title, message, likes, category_ids } = req.body

      if (!id) {
        return res.status(400).json({ error: "Missing Id" })
      }

      const post = await updatePost({
        title,
        message,
        likes,
        category_ids,
        id
      })

      if (!post) {
        return res.status(400).json("invalid data")
      }

      return res.status(201).json({ message: "Post Updated" })

    } catch (error) {
      console.error(error)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({ error: "Missing Id" })
      }

      const post = await postDelete({ post_id: id })

      return res.status(200).json({ message: post })

    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new PostsController()