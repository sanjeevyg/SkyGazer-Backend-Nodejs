const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken');
const database = require("../database/database.js")




function authenticate(request, response, next) {
    const authHeader = request.get("Authorization")
    const token = authHeader.split(" ")[1]
    const secret =  process.env.JWT_SECRET

    jwt.verify(token, secret, (error, payload) => {
        if(error) throw new Error("sign in error!")

        database("users")
        .where({username: payload.username})
        .first()
        .then(user => {
            request.user = user
            next()
        }).catch(error => {
            response.json({message: error.message})
        })
    })
}

module.exports =  authenticate