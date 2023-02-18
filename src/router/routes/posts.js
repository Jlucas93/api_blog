const { Router } = require('express');
const postsController = require('../../controllers/posts/Controller/postController.js')

const postRouter = Router()


postRouter.get('/', postsController.UserPosts)
postRouter.get('/:id', postsController.getPost)
postRouter.get('/all', postsController.getAllPosts)
postRouter.post('/', postsController.create)
postRouter.patch('/:id', postsController.update)
postRouter.delete('/:id', postsController.delete)


module.exports = postRouter