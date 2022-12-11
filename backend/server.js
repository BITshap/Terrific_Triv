// dependencies
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express')
const app = express()


// controllers
app.use('/questions', require('./controllers/questions_controller'))

// routes
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Terrific Trivia Database!')
})

app.get('*', (req, res) => {
    res.status(404).send('Error 404: Not Found')
})

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server listening on ${process.env.BACKEND_PORT}`)
})