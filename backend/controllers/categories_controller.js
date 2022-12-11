// dependencies
const router = require('express').Router()
const Category = require('../models/category')
const Question = require('../models/question')

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
    Category.create(req.body)
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
router.get('/:id/questions', (req, res) => {
    Question.find()
        .then(foundQuestions => {
            res.status(200).send(JSON.stringify(foundQuestions))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// GET /categories/:id/questions/:questionId
// sends questions with matching id from category with matching id
router.get('/:id/questions/:questionId', (req, res) => {
    Question.findById()
        .then(foundQuestion => {
            res.status(200).send(JSON.stringify(foundQuestion))
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// POST /category/:id/questions
// creates new question in category with matching id
router.post('/:id/questions', (req, res) => {
    Category.findById(req.params.id)
        .then(category => {
            Question.create(req.body)
                .then(question => {
                    category.questions.push(question.id)
                    category.save()
                        .then(() => {
                            res.status(200).send(`New question successfully created for category ${req.params.id}`)
                        })
                })
                .catch(err => {
                    if (err && err.name == 'ValidationError') {
                        let message = 'Validation Error: ';
                        for (var field in err.errors) {
                            message += `${field} was ${err.errors[field].value}. `;
                            message += `${err.errors[field].message}`;
                        }
                            res.status(400).send(message);
                    } else {
                        res.status(404).render('error404');
                    }
                })
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// PUT /category/:id/questions/:questionId
// updates question with matching id in category with matching id
router.put('/:id/questions/:questionId', (req, res) => {
    Question.findByIdAndUpdate(req.params.questionId, req.body)
        .then(() => {
            res.status(200).send(`Successfully updated question ${req.params.questionId} from category ${req.params.id}`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// DELETE /category/:id/questions/:questionId
// deletes question with matching id from category with matching id
router.delete('/:id/questions/:questionId', (req, res) => {
    Question.findByIdAndDelete(req.params.questionId)
        .then(() => {
            res.status(200).send(`Successfully deleted question ${req.params.questionId} from category ${req.params.id}`)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router