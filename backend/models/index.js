// dependencies
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

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