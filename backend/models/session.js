// dependencies
const mongoose = require('mongoose')

// schema
const sessionSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    questions: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
            question: { type: String },
            correctAnswer: { type: String },
            selectedAnswer: { type: String },
            isCorrect: selectedAnswer === correctAnswer ? true : false
        }
    ],
    score: { type: Number, required: true },
    date: { type: Date }
})

// export
module.exports = mongoose.model('Session', sessionSchema)