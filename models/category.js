// dependencies
const mongoose = require('mongoose')

// schema
const categorySchema = mongoose.Schema({
    collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: { type: String, required: true },
    type: { type: Number }
})

// export
module.exports = mongoose.model('Category', categorySchema)