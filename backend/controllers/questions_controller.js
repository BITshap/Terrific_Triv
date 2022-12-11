
/* 
    NOTE: IF CATEGORIES USED THIS WILL BE OBSOLETE
    AS QUESTIONS WILL BE ACCESSED THROUGH CATEGORIES
*/

// dependencies
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

// POST /questions
// creates new question

// PUT /questions/:id
// updates question with matching id

// DELET /questions/:id
// deletes question with matching id

module.exports = router