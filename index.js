require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

const userRouter = require('./routes/user.js')
const { response } = require('express')

const app = express();


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`listening at port ${port}`))
app.use(userRouter)

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
    
//     const path = require('path');
//     app.get('*', (request, response) => {
//         response.sendFile(path.resolve(__dirname, ' client ', ' build ', 'index.html'))
//     })
// }




