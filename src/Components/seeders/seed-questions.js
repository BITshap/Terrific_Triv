const db = require('../../../backend/models')

db.Question.create([{
  questions: 'What is the phospholipid bilayer with embedded protiens that surrounds every cell?',
  correctAnswer: 'Cell membrane',
  incorrectAnsers: [ 
    'Cell wall',
   'Cholesterol',
   'Osmosis'
]
},
{
  questions: 'What is the medical term for a muscle cell also known as a muscle fiber?',
  correctAnswer: 'Myocyte',
  incorrectAnsers: [ 
    'Oocyte',
   'Neuron',
   'Steriod'
]
}])
  .then(() => {
    console.log('Seed Success!')
    process.exit()
  })
  .catch(err => {
    console.log('Seed Failure!', err)
    process.exit()
  })