const { Router } = require('express')
const userController = require('../../controllers/user/Controller/userController.js')

const verifyToken = require('../../middlewares/verifyToken')

const userRouter = Router()

userRouter.get('/', verifyToken, userController.getAllUsers)
userRouter.get('/:id', verifyToken, userController.getUser)
userRouter.post('/', userController.create)
userRouter.patch('/:id', userController.update)
userRouter.delete('/:id', userController.delete)


module.exports = userRouter