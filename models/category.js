// dependencies
const mongoose = require('mongoose')

// schema
const categorySchema = mongoose.Schema({
    questions: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Question' } ],
    name: { type: String, required: true },
    type: { type: Number }
})

// export
module.exports = mongoose.model('Category', categorySchema)