// dependencies
const router = require('express').Router()
const db = require('../models')

// sesssions controller

// GET /sessions/:id/sessions/:sessionId
// sends session with matching id from user with matching id
router.get('/:id/:sessionId', (req, res) => {
    db.Session.findById(req.params.sessionId)
        .then(foundSession => {
            res.status(200).send(JSON.stringify(foundSession))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// GET /sessions/:id/sessions
// sends all sessions from current user
router.get('/:id', (req, res) => {
    db.Session.find({ 'user': req.params.id })
        .then(foundSessions => {
            res.status(200).send(JSON.stringify(foundSessions))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// POST /sessions/:id/sessions
// creates a new session for a specific user
router.post('/:id', (req, res) => {
    db.User.findById(req.params.id)
        .then(user => {
            db.Session.create(req.body)
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

// DELETE /sessions/:id/sessions/:sessionId
// deletes a session from a user's sessions
router.delete('/:id/sessions/:sessionId', (req, res) => {
    db.Session.findByIdAndDelete(req.params.sessionId)
        .then(() => {
            res.status(200).send(`Session ${req.params.sessionId} successfully deleted from user ${req.params.id}`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router