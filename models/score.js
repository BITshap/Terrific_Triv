// dependencies
const mongoose = require('mongoose')

// schema
const scoreSchema =  mongoose.Schema({
    questionId: { type: mongoose.Schema.Types.ObjectId },
    score: { type: Number, required: true },
    totalAttempts: { type: Number }
})

// export
module.exports = mongoose.model('Score', scoreSchema)