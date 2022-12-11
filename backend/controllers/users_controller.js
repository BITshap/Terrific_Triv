const router = require('express').Router()
const User = require('../models/user')

// GET /users
// sends all users
router.get('/', (req, res) => {
    User.find()
        .then(foundUsers => {
            res.status(200).send(JSON.stringify(foundUsers))
        })
        .catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
})

// GET /users/:id
// sends user with matching id


module.exports = router