const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./router/index.js')

dotenv.config()

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)



app.listen(process.env.PORT || 8080,
  () => console.info('Server started on port: ' + process.env.PORT || 8080)
)