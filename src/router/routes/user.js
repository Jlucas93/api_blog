import { Router } from 'express'
import userController from '../../controllers/User/Controller/userController.js'
import verifyToken from '../../middlewares/verifyToken.js'

const userRouter = Router()

userRouter.get('/', verifyToken, userController.index)


export default userRouter