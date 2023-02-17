const express = require('express');
const cors = require('cors');
const router = require('./router');

require('dotenv').config();
require('./database')


const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)


app.listen(process.env.PORT || 8080,
  () => console.info('Server started on port: ' + process.env.PORT || 8080)
)