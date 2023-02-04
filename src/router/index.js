import { Router } from "express";
import verifyToken from '../middlewares/verifyToken.js'
import user from './routes/user.js'

const routes = Router()

routes.get('/', (req, res) => { res.status(200).json(' olá, página incial') })
routes.use('/user', user)

//outras rotas vão aqui porque por ser obrigátorio estar logado
routes.use(verifyToken)



export default routes