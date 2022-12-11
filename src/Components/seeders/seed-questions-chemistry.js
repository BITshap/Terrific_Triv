const db = require('../models')

db.Question.create([{
  
  questions: 'What is the term for everything in the universe that occupies space (you, the computer in front of you, your drink, and the air your breathing?',
  correctAnswer: 'Matter',
  incorrectAnsers: [ 
    'Who cares?',
   'Vaccuum',
   'The Upside Down'
]
},
{
    questions: 'What is the smallest division of an element that still has the same properties?',
    correctAnswer: 'Atom',
    incorrectAnsers: [ 
      'Proton',
     'Neuron',
     'Molecule'
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
      db.Categories.update({name: "Chemistry"}, {$push: {questionsId: "63960b9ccd6b86a544c3a50b" }});
  
      console.log('Seed Success!')
      process.exit()
    })
    .catch(err => {
      console.log('Seed Failure!', err)
      process.exit()
    })