const { Router } = require('express');
const postsController = require('../../controllers/posts/Controller/postController.js')

const postRouter = Router()

postRouter.get('/', postsController.getAllPosts)
postRouter.get('/:id', postsController.getPost)
postRouter.post('/', postsController.create)
postRouter.patch('/:id', postsController.update)
postRouter.delete('/:id', postsController.delete)


module.exports = postRouter