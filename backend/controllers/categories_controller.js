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
// sends user with matching id
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

module.exports = router