const { Router } = require('express');
const isLogged = require('../middlewares/isLogged.js')

const auth = require('./routes/auth.js')
const user = require('./routes/user.js')
const post = require('./routes/posts.js')


const routes = Router()


routes.use('/auth', auth)

routes.use('/user', isLogged, user)
routes.use('/post', isLogged, post)

module.exports = routes