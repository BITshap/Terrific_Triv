// dependencies
const mongoose = require('mongoose')
require('dotenv').config()

// connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// export schemas
module.exports.Category = require('./category')
module.exports.Question = require('./question')
module.exports.Session = require('./session')
module.exports.User = require('./user')