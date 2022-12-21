// dependencies
const router = require('express').Router()
const db = require('../models')
const anatomySeed = require('../seeders/seed-questions-anatomy')
const biologySeed = require('../seeders/seed-questions-biology')
const chemistrySeed = require('../seeders/seed-questions-chemistry')

// POST /seed/anatomy
// Seeds the anatomy questions
router.get('/anatomy', (req, res) => {
    console.log(anatomySeed)
    db.Question.create(anatomySeed)
        .then(() => {
            res.status(200).send('Anatomy Questions Succesfully Seeded')
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

// POST /seed/biology
// Seeds the biology questions
router.get('/biology', (req, res) => {
    console.log(biologySeed)
    db.Question.create(biologySeed)
        .then(() => {
            res.status(200).send('Biology Questions Succesfully Seeded')
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

// POST /seed/chemistry
// Seeds the chemistry questions
router.get('/chemistry', (req, res) => {
    console.log(chemistrySeed)
    db.Question.create(chemistrySeed)
        .then(() => {
            res.status(200).send('Chemistry Questions Succesfully Seeded')
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

module.exports = router