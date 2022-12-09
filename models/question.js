// dependencies
const mongoose = require('mongoose')

// schema
const questionSchema = mongoose.Schema({
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    incorrectAnsers: [ { type: String } ]
})

// methods
questionSchema.methods.genAnswerOrder = function() {
    // create array of all answer options
    let answerArray = [this.correctAnswer, ...this.incorrectAnsers]
    
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

// export
module.exports = mongoose.Model('Question', questionSchema)