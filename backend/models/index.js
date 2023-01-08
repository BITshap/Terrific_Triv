// dependencies
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const path = require('path')
//require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
//require('dotenv').config()

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// export schemas
module.exports.Category = require('./category')
module.exports.Question = require('./question')
module.exports.Session = require('./session')
module.exports.User = require('./user')