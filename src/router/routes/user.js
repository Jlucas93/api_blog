import { Router } from 'express'
import userController from '../../controllers/user/Controller/userController.js'

const userRouter = Router()

userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.create)
userRouter.patch('/:id', userController.update)
userRouter.delete('/:id', userController.delete)


export default userRouter