const express = require('express')

const PORT = 3001

const db = require('../models')

const app = express()

app.get('/questions', (res, req) => {
    db.Question.find()
        .then(questions => res.send(questions.json()))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})