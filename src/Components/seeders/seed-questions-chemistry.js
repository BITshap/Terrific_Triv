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
    questions: 'What is the positively charged subatomic particle?',
    correctAnswer: 'Proton',
    incorrectAnsers: [ 
      'Neutron',
     'Electron',
     'Magnents'
  ]
},
{
    questions: 'What is the negatively charged subatomic particle?',
    correctAnswer: 'Electron',
    incorrectAnsers: [ 
      'Proton',
     'Neutron',
     'Magnentism'
  ]
},
{
    questions: 'What is the neutrally charged subatomic particle?',
    correctAnswer: 'Neutron',
    incorrectAnsers: [ 
      'Proton',
     'Electron',
     'Magnentism'
  ]
},
{
    questions: 'Which subatomic particle has a negligable mass compared to the others?',
    correctAnswer: 'Neutron',
    incorrectAnsers: [ 
      'Proton',
     'Electron',
     'Isotope'
  ]
},
{
    questions: 'What is mass number of any Isotope?',
    correctAnswer: 'Neutrons plus Protons',
    incorrectAnsers: [ 
      'Protons plus Electrons',
     'Electrons plus neutrons',
     '69 amus'
  ]
},
{
    questions: 'What is the Cosmic Speed Limit as far as we now know?',
    correctAnswer: 'The Speed of Light',
    incorrectAnsers: [ 
      'The Speed of Sound',
     '5 mph above whats posted',
     '8 million mph'
  ]
},
{
    questions: 'What is the name for 2 atoms of the same element that have a different number of Neutrons and therefore a different mass?',
    correctAnswer: 'Isotopes',
    incorrectAnsers: [ 
      'Ions',
     'Conjoined Twins',
     'Cations'
  ]
},
{
    questions: 'An atom gives away some electrons to achcieve a full valence shell. What would we now call it?',
    correctAnswer: 'Cation',
    incorrectAnsers: [ 
      'Anion',
     'Electron Defficent Isotope',
     'Sad'
  ]
},
{
    questions: 'An atom recieves some electrons to achcieve a full valence shell. What would we now call it?',
    correctAnswer: 'Anion',
    incorrectAnsers: [ 
      'Cation',
     'Electron Defficent Isotope',
     'Sad'
  ]
},
{
    questions: 'Where can you find the subatomic particles Neutrons and Protons?',
    correctAnswer: 'Nucleus',
    incorrectAnsers: [ 
      'Google',
     'Craigs list',
     'Electron Clouds'
  ]
},
{
    questions: 'Where can you find the subatomic particles Electrons?',
    correctAnswer: 'Electron cloud orbiting the nucleus',
    incorrectAnsers: [ 
      'Google',
     'Craigs list',
     'Nucleus'
  ]
},
{
    questions: 'Which subatomic particle defines an atom as a particular element?',
    correctAnswer: 'Proton',
    incorrectAnsers: [ 
      'Neutron',
     'Electron',
     'Websters'
  ]
},

{
    questions: 'What is the word for everything that is, ever has been, or ever will be?',
    correctAnswer: 'Cosmos',
    incorrectAnsers: [ 
      'Me',
     'My life',
     'My social media'
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