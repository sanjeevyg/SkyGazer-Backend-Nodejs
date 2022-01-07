require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

const userRouter = require('./routes/user.js')

const app = express();


app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`listening at port ${port}`))
app.use(userRouter)




