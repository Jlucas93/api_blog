import { Router } from 'express'
import userController from '../../controllers/user/Controller/userController.js'


const authRouter = Router()

authRouter.get('/', (req, res) => { res.status(200).json("olá") })
authRouter.post('/register', userController.create)
authRouter.post('/login', userController.create)

export default authRouter