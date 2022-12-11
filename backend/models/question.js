// dependencies
const mongoose = require('mongoose')

// the question collection holds information for individual questions, 
// alongside the categories they belong to
const questionSchema = mongoose.Schema({
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    incorrectAnswers: [ { type: String } ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})

// methods

// method to generate random order for answer options to be displayed, returns an array of strings
questionSchema.methods.genAnswerOrder = function() {
    // create array of all answer options
    let answerArray = [this.correctAnswer, ...this.incorrectAnswers]
    
    // shuffle answerArray using Frisher-Yates method
    let currentIndex = answerArray.length
    let randomIndex

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [answerArray[currentIndex], answerArray[randomIndex]] = [answerArray[randomIndex], answerArray[currentIndex]]
    }

    // return array of all answer options in random order
    return answerArray
}

// export
module.exports = mongoose.model('Question', questionSchema)