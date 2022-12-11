const router = require('express').Router()
const User = require('../models/user')
const Session = require('../models/session')

// GET /users
// sends all users
router.get('/', (req, res) => {
    User.find()
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
    User.findById(req.params.id)
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
    User.create(req.body)
        .then(() => {
            res.status(200).send('New user succesfully created')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error'
                for(var field in err.errors) {
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
    User.findByIdAndUpdate(req.params.id, req.body)
        .then( () => {
            res.status(200).send(`User ${req.params.id} successfully updated`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// DELETE /users/:id
// deletes a user with matching id
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).send(`User ${req.params.id} successfully deleted`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// sesssions controllers

// GET /users/:id/sessions/:sessionId
// sends session with matching id from user with matching id
router.get('/:id/sessions/:sessionId', (req, res) => {
    Session.findById(req.params.sessionId)
        .then(foundSession => {
            res.status(200).send(JSON.stringify(foundSession))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// POST /users/:id/sessions
// creates a new session for a specific user
router.post('/:id/sessions', (req, res) => {
    User.create(req.params.id)
        .then(user => {
            Session.create(req.body)
                .then(session => {
                    user.sessions.push(session.id)
                    user.save()
                        .then(() => {
                            res.status(200).send(`New session successfully created for user ${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.status(404).send(err)
                })
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// DELETE /users/:id/sessions/:sessionId
// deletes a session from a user's sessions
router.delete('/:id/sessions/:sessionId', (req, res) => {
    Session.findByIdAndDelete(req.params.sessionId)
        .then(() => {
            res.status(200).send(`Session ${req.params.sessionId} successfully deleted from user ${req.params.id}`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router