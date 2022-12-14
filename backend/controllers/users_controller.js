// dependencies
const router = require('express').Router()
const db = require('../models')

// GET /users
// sends all users
router.get('/', (req, res) => {
    db.User.find()
        .then(foundUsers => {
            res.status(200).send(JSON.stringify(foundUsers))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// GET /users/loginInfo
// sends an array of the emails associated with every user
router.get('/loginInfo', (req, res) => {
    db.User.find({}, 'email password')
        .then(foundUsers => {
            res.status(200).send(JSON.stringify(foundUsers))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// GET /users/:id
// sends user with matching id
router.get('/:id', (req, res) => {
    db.User.findById(req.params.id)
        .populate('sessions')
        .then(foundUser => {
            res.status(200).send(JSON.stringify(foundUser))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// POST /users
// creates a new user
router.post('/', (req, res) => {
    console.log(req.body)
    db.User.create(req.body)
        .then(() => {
            res.status(200).send('New user succesfully created')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error'
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                res.status(400).send(message)
            } else {
                res.status(404).send(err)
            }
        })
})

// PUT /users/:id
// updates a user with matching id
router.put('/:id', (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).send(`User ${req.params.id} successfully updated`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// DELETE /users/:id
// deletes a user with matching id
router.delete('/:id', (req, res) => {
    db.User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).send(`User ${req.params.id} successfully deleted`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router