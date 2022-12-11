const router = require('express').Router()
const Category = require('../models/category')

// GET /categories
// sends all categories
router.get('/', (req, ress) => {
    Category.find()
        .then(foundCategories => {
            ress.status(200).send(JSON.stringify(foundCategories))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// GET /categories/:id
// sends category with matching id
router.get('/:id', (req, res) => {
    Category.findById(req.params.id)
        .populate('questions')
        .then(foundCategory => {
            res.status(200).send(JSON.stringify(foundCategory))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// POST /categories
// creates new category
router.post('/', (req, res) => {
    Category.create()
        .then(() => {
            res.status(200).send('New category successfully created')
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

// PUT /category/:id
// updates category with matching id
router.put('/:id', (req, res) => {
    Category.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).status(`Category ${req.params.id} successfully updated`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// DELETE /category/:id
// deletes category with matching id
router.delete('/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).send(`Category ${req.params.id} successfully deleted`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// questions controllers (if categories used)

// GET /categories/:id/questions
// sends all questions of category with matching id

// GET /categories/:id/questions/:questionId
// sends questions with matching id from category with matching id

// POST /category/:id/questions
// creates new question in category with matching id

// PUT /category/:id/questions/:questionId
// updates question with matching id in category with matching id

// DELETE /category/:id/questions/:questionId
// deletes question with matching id from category with matching id

module.exports = router