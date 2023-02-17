const { Router } = require('express');
const userController = require('../../controllers/user/Controller/userController.js')
const authController = require('../../controllers/auth/Controller/authController.js')


const authRouter = Router()

authRouter.post('/', authController.login)
authRouter.post('/register', userController.create)

module.exports = authRouter