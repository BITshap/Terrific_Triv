const db = require('../models')

db.Question.create([{
  questions: 'H-Thai-ML',
  correctAnswer: 'Seattle',
  incorrectAnsers: 'WA',
  incorrectAnsers: 'Thai, Pan-Asian',
  incorrectAnsers: '/images/thai-food.jpg'
},
{
  questions: 'H-Thai-ML',
  correctAnswer: 'Seattle',
  incorrectAnsers: 'WA',
  incorrectAnsers: 'Thai, Pan-Asian',
  incorrectAnsers: '/images/thai-food.jpg'
}])
  .then(() => {
    console.log('Seed Success!')
    process.exit()
  })
  .catch(err => {
    console.log('Seed Failure!', err)
    process.exit()
  })