import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './router/index.js'

dotenv.config()

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)



app.listen(process.env.PORT || 8080,
  () => console.info('Server started on port: ' + process.env.PORT || 8080)
)