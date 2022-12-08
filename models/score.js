// dependencies
const mongoose = require('mongoose')

// schema
const scoreSchema =  mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    score: { type: Number, required: true },
    totalAttempts: { type: Number }
})

// export
module.exports = mongoose.model('Score', scoreSchema)