// dependencies
const mongoose = require('mongoose')

// schema
const questionSchema = mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    incorrectAnswers: [ { type: String } ]
})

// methods
questionSchema.methods.genAnswerOrder = function(){
    // create array of all answer options
    let answerArray = [this.correctAnswer, ...this.incorrectAnswers]
    
    // shuffle answerArray
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

module.exports = mongoose.Model('Question', questionSchema)