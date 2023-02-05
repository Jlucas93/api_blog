const { Router } = require('express')
const verifyToken = require('../middlewares/verifyToken')
const user = require('./routes/user.js')

const routes = Router()

routes.get('/', (req, res) => { res.status(200).json(' olá, página incial') })
routes.use('/user', user)

//outras rotas vão aqui porque por ser obrigátorio estar logado
routes.use(verifyToken)



module.exports = routes