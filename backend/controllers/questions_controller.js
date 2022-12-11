const router = require('express').Router()
const Question = require('../models/question')

// GET /questions
// sends all questions
router.get('/', (req, res) => {
    Question.find()
        .then(foundQuestions => {
            res.status(200).send(JSON.stringify(foundQuestions))
        })
        .catch(err => {
            res.status(404).send(err)
        })
    })

// GET /questions/:id
// sends question with matching id
router.get('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(foundQuestion => {
            res.status(200).send(JSON.stringify(foundQuestion))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router