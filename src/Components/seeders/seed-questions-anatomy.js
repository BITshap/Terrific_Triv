const db = require('../models')

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
    questions: 'What is the medical term for a bone cell?',
    correctAnswer: 'Oocyte',
    incorrectAnsers: [ 
      'Myocyte',
     'Neuron',
     'Steriod'
  ]
  },
  {
    questions: 'What is the term for the support cells in the Nervous System (i.e.: Oligodendrocytes and Astrocytes?',
    correctAnswer: 'Neuroglial Cells',
    incorrectAnsers: [ 
      'Oocyte',
     'Neuron',
     'Myocyte'
  ]
  },
  {
    questions: 'What is the medical term for the sense of smell?',
    correctAnswer: 'Olfaction',
    incorrectAnsers: [ 
      'Stank',
     'Gustation',
     'Canudu'
  ]
  },
  {
    questions: 'What is the medical term for the sense of taste?',
    correctAnswer: 'Gustation',
    incorrectAnsers: [ 
      'Sphincter',
     'Olfaction',
     'Yummy'
  ]
  },
  {
    questions: 'What is the structure at the back of the eye that contains the rod and cone cells?',
    correctAnswer: 'Retina',
    incorrectAnsers: [ 
      'Lens',
     'Pupil',
     'Soft palate'
  ]
  },
  {
  questions: 'What is the structure of the eye that supplies blood and gives our eyes color?',
  correctAnswer: 'Iris',
  incorrectAnsers: [ 
    'Lens',
   'Pupil',
   'Retina'
]
},
{
    questions: 'What is the hole through which light passes into the eye?',
    correctAnswer: 'Pupil',
    incorrectAnsers: [ 
      'Cell Membrane',
     'Sphincter',
     'Retina'
  ]
  },
  {
    questions: 'What are the visible bumbs on the surface of the tongue that each contain many taste buds?',
    correctAnswer: 'Papillae',
    incorrectAnsers: [ 
      'Taste Buds',
     'Soft Palete',
     'Hard Palete'
  ]
  },
  {
    questions: 'What is the anatomical term for situated nearer to the center of the body or the point of attachment ("closer to")?',
    correctAnswer: 'Proximal',
    incorrectAnsers: [ 
      'Distal',
     'Superior',
     'Inferior'
  ]
  },
  {
    questions: 'What are chemical messengers that are released into the bloodstream (Hint: Target cells only respond to them if they have receptors specific to them)?',
    correctAnswer: 'Hormones',
    incorrectAnsers: [ 
      'Neurons',
     'Pheromones',
     'Proteins'
  ]
  },
  {
    questions: 'What is conscious interpretation of the external world created by patterns of activity in the brain?',
    correctAnswer: 'Perception',
    incorrectAnsers: [ 
      'Deception',
     'Attention',
     'Sensation'
  ]
  },
  {
    questions: 'What do photorecerptors respond to?',
    correctAnswer: 'Wavelengths of light',
    incorrectAnsers: [ 
      'Instagram likes',
     'Sounds',
     'Pressure'
  ]
  },
  {
    questions: 'What are the 3 tiny bones that transmit vibrations from the tympanic membrane to the cochlea?',
    correctAnswer: 'Auditory Ossicles (malleus, incus, and stapes)',
    incorrectAnsers: [ 
      'Metallica, Incubus, and Staples',
     'Triumphvirate',
     'Femur, Patella, and Tibia'
  ]
  },
  {
    questions: 'What is the property of muscle tissue that refers to the fact that it will return to its normal resting state without being damaged?',
    correctAnswer: 'Elasticity',
    incorrectAnsers: [ 
      'Excitability',
     'Conductivity',
     'Contractility'
  ]
  },
  {
    questions: 'What is the property of muscle tissue that refers to the fact that it will return to its normal resting state without being damaged?',
    correctAnswer: 'Elasticity',
    incorrectAnsers: [ 
      'Excitability',
     'Conductivity',
     'Contractility'
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
])


    .then(() => {
    db.Categories.update({name: "Anatomy"}, {$push: {questionsId: "63960b51cd6b86a544c3a509" }});
      console.log('Seed Success!')
      process.exit()
    })
    .catch(err => {
      console.log('Seed Failure!', err)
      process.exit()
    })