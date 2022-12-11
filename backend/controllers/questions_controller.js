const question = require('../models/question')

const router = require('express').Router()
const Question = require('../models').Question

// GET /questions
router.get('/', (req, res) => {
    Question.find()
        .then(foundQuestions => {
            res.send(JSON.stringify(foundQuestions))
        })
        .catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
    })

// GET /questions/:id
router.get('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(foundQuestion => {
            res.send(JSON.stringify(foundQuestion))
        })
        .catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
})

module.exports = router