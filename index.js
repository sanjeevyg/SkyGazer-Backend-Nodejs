require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

const userRouter = require('./routes/user.js')

const app = express();
// const port = process.env.PORT || 4000
app.listen(process.env.PORT || 4000)

app.use(cors())
app.use(bodyParser.json())
app.use(userRouter)




