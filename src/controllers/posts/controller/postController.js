const postCreate = require('../services/postCreate')
const getPost = require('../services/getPost')

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

      if (!req.user.is_admin) {
        return res.status(401).json({ msg: "Only admisn have acess" })
      }

      const posts = await getUser({ id: null });

      return res.status(200).json(posts)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  async create(req, res) {
    try {

      const { title, message, } = req.body
      const user = req.user

      const post = await postCreate({ title, message, user_id: user.id })

      if (!post) {
        return res.status(400).json({ error: post })
      }

      return res.status(201).json(post)

    } catch (error) {
      console.error(error)
      return res.status(500).json('Internal Server Error')
    }
  }

  async update(req, res) {

  }

  delete(req, res) { }
}

module.exports = new PostsController()