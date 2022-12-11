// dependencies
const mongoose = require('mongoose')

// the category collection holds information on the categories, 
// alongside an array containing the questions that belong to them
const categorySchema = mongoose.Schema({
    questions: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Question' } ],
    name: { type: String, required: true },
    type: { type: Number }
})

// export
module.exports = mongoose.model('Category', categorySchema)