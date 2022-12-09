// dependencies
const mongoose = require('mongoose')

// schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    age: { 
        type: Number,
        min: [13, 'You must be at least 13 years old to sign up for Terrific Trivia!'],
        required: true
    },
    lastPlayed: { type: Date },
    lastLLogin: { type: Date }
})

// export
module.exports = mongoose.model('User', userSchema)