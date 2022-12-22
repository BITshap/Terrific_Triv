// dependencies
const mongoose = require('mongoose')

// the question collection holds information for individual questions, 
// alongside the categories they belong to
const questionSchema = mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    incorrectAnswers: [ [ ] ]
    
})

// export
module.exports = mongoose.model('Question', questionSchema)