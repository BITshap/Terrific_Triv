// dependencies
const path = require('path')
//require('dotenv').config({ path: path.resolve(__dirname, './.env') })
//require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// cors for cross origin fix
const cors = require('cors')
app.use(cors())

// controllers
app.use('/users', require('./controllers/users_controller'))
app.use('/categories', require('./controllers/categories_controller'))
app.use('/session', require('./controllers/session_controller'))
app.use('/seed', require('./controllers/seed_controller'))

// routes
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Terrific Trivia Database!')
})

app.get('*', (req, res) => {
    res.status(404).send('Error 404: Not Found')
})

// listen for connection to server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})