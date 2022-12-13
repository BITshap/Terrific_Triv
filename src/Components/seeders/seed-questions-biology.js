const db = require('../../../backend/models')

db.Question.create([{
<<<<<<< HEAD:src/Components/seeders/seed-questions-biology.js
  
  questions: 'What is the phospholipid bilayer with embedded protiens that surrounds every cell?',
=======
  question: 'What is the phospholipid bilayer with embedded protiens that surrounds every cell?',
>>>>>>> f1f194107c4dcb852e227f2d4d37ea7f58e93903:src/Components/seeders/seed-questions.js
  correctAnswer: 'Cell membrane',
  incorrectAnsers: [ 
    'Cell wall',
   'Cholesterol',
   'Osmosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What are the organelles that transcribe and translate DNA into proteins in every cell?',
  correctAnswer: 'Ribosomes',
  incorrectAnsers: [ 
    'Lysosomes',
   'Mitochondria',
   'Vesicles'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the rigid structure of mostly cellulose outside of the phospholipid bilayer surrounding plant cells?',
  correctAnswer: 'Cell Wall',
  incorrectAnsers: [ 
    'Cell membrane',
   'Cholesterol',
   'Osmosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'Known as the powerhouse of the cell, this organelle is where cellular respiration takes place in Eukaryotes?',
  correctAnswer: 'Mitochondria',
  incorrectAnsers: [ 
    'Ribosomes',
   'Golgi Apparatus',
   'Endoplasmic Reticulum'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the term for pluripontent cells that can self replicate or differentiate to form all different types of cells',
  correctAnswer: 'Stem Cells',
  incorrectAnsers: [ 
    'Somatic Cells',
   'Gametes',
   'Prokaryotes'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What organelle packages products in vesicles for transport or storage?',
  correctAnswer: 'Golgi Apparatus',
  incorrectAnsers: [ 
    'Endoplasmic Reticulum',
   'Ribosomes',
   'Nucleus'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
question: 'What organelle contains the DNA in Eukaryotic cells?',
correctAnswer: 'Nucleus',
incorrectAnsers: [ 
  'Cell membrane',
 'Endoplasmic reticulum',
 'Hard Drive'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the process by which plantss convert sunlight into glucose?',
  correctAnswer: 'Photosynthesis',
  incorrectAnsers: [ 
    'Cellular Respiration',
   'Fermentation',
   'Osmosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the process by which organisms convert glucose into ATP?',
  correctAnswer: 'Cellular Respiration',
  incorrectAnsers: [ 
    'Photosynthesis',
   'Fermentation',
   'Osmosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the term for a fertilized egg that is a single cell that will give rise to an entire organism?',
  correctAnswer: 'Zygote',
  incorrectAnsers: [ 
    'Gamete',
   'Prokaryote',
   'Sex Cell'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the process by which somatic cells duplicate themselves?',
  correctAnswer: 'Mitosis',
  incorrectAnsers: [ 
    'Meosis',
   'Cloning',
   'Differentiaiton'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the process by which a diploid cell creates 4 haploid cells in preparation for sexual reproduction?',
  correctAnswer: 'Meiosis',
  incorrectAnsers: [ 
    'Mitosis',
   'Gametification',
   'Apoptosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the organelle in which sunlight excites pigments in the first steps of Photosynthesis?',
  correctAnswer: 'Chloroplast',
  incorrectAnsers: [ 
    'Mitochondria',
   'Ribosome',
   'Cell Wall'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What has the reactants Oxygen and Glucose and the products Carbon Dioxide, Water, and ATP?',
  correctAnswer: 'Cellular Respiration',
  incorrectAnsers: [ 
    'Photosynthesis',
   'Fermentation',
   'Osmosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What has the reactants Water, Carbon Dioxide, and Sunlight and the products Glucose and Oxygen',
  correctAnswer: 'Photosynthesis',
  incorrectAnsers: [ 
    'Cellular Respiration',
   'Fermentation',
   'Osmosis'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What kind of macromolecules are enzymes?',
  correctAnswer: 'Proteins',
  incorrectAnsers: [ 
    'Carbohydrates',
   'Lipids',
   'Good ones'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What kind of macromolecules are broken down for quick energy and made of carbon, hydrogen, and oxygen?',
  correctAnswer: 'Carbohydrates',
  incorrectAnsers: [ 
    'Lipids',
   'Proteins',
   'Steroids'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What kind of macromolecules are hydrophobic and used for long term energy storage?',
  correctAnswer: 'Lipids',
  incorrectAnsers: [ 
    'Carbohydrates',
   'Proteins',
   'Batteries'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
},
{
  question: 'What is the medical term for a muscle cell also known as a muscle fiber?',
  correctAnswer: 'Myocyte',
  incorrectAnsers: [ 
    'Oocyte',
   'Neuron',
   'Steriod'
  ],
  category: ObjectId("63960b7dcd6b86a544c3a50a")
}])
  .then(() => {
    db.Categories.update({name: "Biology"}, {$push: {questionsId: "63960b7dcd6b86a544c3a50a" }});

    console.log('Seed Success!')
    process.exit()
  })
  .catch(err => {
    console.log('Seed Failure!', err)
    process.exit()
  })