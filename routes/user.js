const express = require("express")
const router = express.Router()
const database = require("../database/database.js")
const authenticate = require("../authenticate/authenticate.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


// router.get('/authenticate', authenticate, (request, response) => {
//     response.json({message: `Welcome ${request.user.username}!` })
// })

router.get('/users', (request, response) => {
    database("users")
    .select()
    .returning("*")
    .then((users) => {
        response.json(users)
    }).catch(error => {
        response.json({error: error.message})
    })
})

router.get('/users/:id', (request, response) => {
    const id = request.params.id
    database("users")
    .where({id: id})
    .first()
    .then((user) => {
        response.json(user)
    }).catch(error => {
        response.json({error: error.message})
    })
})

router.post("/users", ( request, response ) => {
    const { user } = request.body

    bcrypt.hash(user.password, 12)
        .then(hashed_password => {
           return database("users")
                .insert({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    password_hash: hashed_password
                }) 
                .returning("*")
                .then(users => {
                    const user = users[0]
                    response.json({ user })
                }).catch(error => {
                    response.json({ error: error.message })
                })
        }
    )
})

router.post("/login", ( request, response ) => {
    const { user } = request.body

    database("users")
        .where({username: user.username })
        .first()
        .then(retrievedUser => {
            if(!retrievedUser) throw new Error("user not found!")

            return Promise.all([
                bcrypt.compare(user.password, retrievedUser.password_hash),
                Promise.resolve(retrievedUser)
            ]).then(results => {
                const areSamePasswords = results[0]
                if(!areSamePasswords) throw new Error("wrong Password!")
                const user = results[1]
                const payload = {username: user.username}
                const secret =  process.env.JWT_SECRET

                jwt.sign(payload, secret, (error, token) => {
                    if(error) throw new Error("Sign in error!")
                    response.json({token, user})
                }).catch(error => {
                    response.json({message: error.message})
                })
            })
        })
})


router.delete('/users/:id', (request, response) => {
    const id = request.params.id
    database('users')
        .where({id: id})
        .delete()
        .then(() => {
            response.json({message:  `user account with ${id} is delete`})
        }).then(error => {
            response.json({ error: error.message })
        })
})

router.patch('/users', (request, response) => {
    const user = request.body
    database('users')
        .where({id: request.params.id})
        .update(user)
        .returning('*')
        .then(user => {
            response.json({user})
        })
})

module.exports = router;