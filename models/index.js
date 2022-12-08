// dependencies
const mongoose = require('mongoose')
require('dotenv').config()

// connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// export schemas