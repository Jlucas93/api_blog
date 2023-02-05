import { Router } from 'express'
import isLogged from '../middlewares/isLogged.js'

import auth from './routes/auth.js'
import user from './routes/user.js'

const routes = Router()


routes.use('/', auth)

routes.use(isLogged)

routes.use('/user', user)

export default routes