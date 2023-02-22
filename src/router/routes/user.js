const { Router } = require('express');
const userController = require('../../controllers/user/Controller/userController.js')

const userRouter = Router()

userRouter.get('/', userController.getAllUsers)
userRouter.get('/post', userController.getPosts)
userRouter.get('/:id', userController.getUser)
userRouter.patch('/:id', userController.update)
userRouter.delete('/:id', userController.delete)


module.exports = userRouter