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
    questions: 'What is the property of muscle tissue that refers to the fact that it will respond to electrical signals?',
    correctAnswer: 'Excitability',
    incorrectAnsers: [ 
      'Elasticity',
     'Conductivity',
     'Contractility'
  ]
  },
  {
    questions: 'What are the building blocks of proteins?',
    correctAnswer: 'Amino acids',
    incorrectAnsers: [ 
      'Whey',
     'Neurons',
     'Steriods'
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
  },
  {
    questions: 'What is a disease characterized by uncontrolled cell division?',
    correctAnswer: 'Cancer',
    incorrectAnsers: [ 
      'Meiosis',
     'Mitosis',
     'Anemia'
  ]
  },
  {
    questions: 'What is a disease characterized by an inability to produce enough insulin to regulate blood glucose levels?',
    correctAnswer: 'Diabetes Mellitus',
    incorrectAnsers: [ 
      'Juandice',
     'Anemia',
     'Cancer'
  ]
  },
  {
    questions: 'What is the outer portion of an organ called, for example the outer portion of a lymph node?',
    correctAnswer: 'Cortex',
    incorrectAnsers: [ 
      'Medulla',
     'Exterior',
     'Distal'
  ]
  },
  {
    questions: 'What is the transparent tissue over the anterior of the eye?',
    correctAnswer: 'Cornea',
    incorrectAnsers: [ 
      'Retina',
     'Pupil',
     'Lacrima'
  ]
  },
  {
    questions: 'What is the snail shaped structure in the inner ear containing hair cells?',
    correctAnswer: 'Cochlea',
    incorrectAnsers: [ 
      'Auditory Ossicles',
     'Tympanic Membrane',
     'Coccyx'
  ]
  },
  {
    questions: 'What is the first segment of the small intestine, located between the pyloric valve of the stomach and the jejunum?',
    correctAnswer: 'Duodenum',
    incorrectAnsers: [ 
      'Coccyx',
     'Epigolittis',
     'Sphincter'
  ]
  },
  {
    questions: 'What are the branches of a neuron that collect stimuli and transport them to the cell body?',
    correctAnswer: 'Dendrites',
    incorrectAnsers: [ 
      'Axons',
     'Neurotransmitters',
     'Cones'
  ]
  },
  {
    questions: 'What is the innermost layer of the heart, which lines the interior of the heart chambers aand covers the valves',
    correctAnswer: 'Endocardium',
    incorrectAnsers: [ 
      'Ventricle',
     'Atrium',
     'Myocardium'
  ]
  },
{
    questions: 'What is a condition characterized by a decrease in the number of red blood cells or an insufficent amount of hemoglogin?',
    correctAnswer: 'Anemia',
    incorrectAnsers: [ 
      'Juandice',
     'Crips',
     'Cancer'
  ]
  },
  {
    questions: 'What is an essential molecule of the red blood cell that serves as a binding site for oxygen and carbon dioxide?',
    correctAnswer: 'Hemoglobin',
    incorrectAnsers: [ 
      'Hemacrit',
     'Insulin',
     'Hypoxemia'
  ]
  },
  {
    questions: 'What is the triangular-shaped space inferior to the pharynx that is responsible for voice production?',
    correctAnswer: 'Larynx',
    incorrectAnsers: [ 
      'Trachea',
     'Esophogus',
     'Throat'
  ]
  },
])


    .then(() => {
    db.Categories.update({name: "Anatomy"}, {$push: {category: "63960b51cd6b86a544c3a509" }});
      console.log('Seed Success!')
      process.exit()
    })
    .catch(err => {
      console.log('Seed Failure!', err)
      process.exit()
    })