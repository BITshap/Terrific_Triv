// dependencies
const mongoose = require('mongoose')

// schema
const sessionSchema = mongoose.Schema({
    questions: [ { type: mongoose.Schema.Types.ObjectId } ],
    score: { type: Number, required: true },
    date: { type: Date }
})

// export
module.exports = mongoose.model('Session', sessionSchema)