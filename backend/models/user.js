// dependencies
const mongoose = require('mongoose')

// the user collection holds information about users, 
// alongside their session histories
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { String },
    lastPlayed: { type: Date },
    lastLogin: { type: Date },
    overallGrade: { type: String },
    sessions: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Session' } ]
})

// export
module.exports = mongoose.model('User', userSchema)