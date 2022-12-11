// dependencies
const mongoose = require('mongoose')

// schema
const sessionSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    questions: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Question' } ],
    score: { type: Number, required: true },
    date: { type: Date }
})

// export
module.exports = mongoose.model('Session', sessionSchema)