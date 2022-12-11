// dependencies
const mongoose = require('mongoose')

// the session collection holds session information from when a user submits a quiz
const sessionSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // objects in questions array will be different than the question collection schema, 
    // but will still reference it in case the user would like to repeat the same quiz
    questions: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
            question: { type: String },
            correctAnswer: { type: String },
            selectedAnswer: { type: String },
            isCorrect: selectedAnswer === correctAnswer ? true : false
        }
    ],
    score: { type: String, required: true }, // string because score should be a percentage
    date: { type: Date }
})

// export
module.exports = mongoose.model('Session', sessionSchema)