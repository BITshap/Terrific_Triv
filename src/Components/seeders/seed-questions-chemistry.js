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
    questions: 'What is the zero point on the Kelvin temperature scale, equivalent to -273.15 degrees Celcius?',
    correctAnswer: 'Absolute Zero',
    incorrectAnsers: [ 
      'Freezing',
     'Fahrenheit 451',
     'Pretty Cold'
  ]
},
{
    questions: 'What is a compound that produces hydrogen ions in solution?',
    correctAnswer: 'Acid',
    incorrectAnsers: [ 
      'Base',
     'Solvent',
     'Ammonia'
  ]
},
{
    questions: 'What is the name for a positively charged particle emitted from a radioactive nucleus (identical to the nucleus of a helium atom?',
    correctAnswer: 'Aplha Particle',
    incorrectAnsers: [ 
      'Neutron',
     'Electron',
     'Positron'
  ]
},
{
    questions: 'What is the number of representative particles contained in on mole of a substance?',
    correctAnswer: 'Avagadros Number',
    incorrectAnsers: [ 
      '8 billion',
     'Avocados Slumber',
     'Too many to count'
  ]
},
{
    questions: 'What is emitted from some radioactive elements that is an electron resulting from the breaking apart of neutrons?',
    correctAnswer: 'Beta Particle',
    incorrectAnsers: [ 
      'Neutron',
     'Electron',
     'Alpha Particle'
  ]
},
{
    questions: 'What is the quantity of heat needed to raise the temperature of 1g of pure water by 1 degree Celcius?',
    correctAnswer: 'Calorie',
    incorrectAnsers: [ 
      'Newton',
     'Gravitron',
     '8 units'
  ]
},
{
    questions: 'What is a compound that produces hydroxide ions in solution?',
    correctAnswer: 'Base',
    incorrectAnsers: [ 
      'Neutron',
     'Electron',
     'Acid'
  ]
},
{
    questions: 'What is the ratio of the mass of an object to its volume?',
    correctAnswer: 'Density',
    incorrectAnsers: [ 
      '5 to 9',
     '9 to 5',
     'Enthalpy'
  ]
},
{
    questions: 'What is the term for energy waves that travel at the speed of light, including radio waves, infrared waves, visible light, ultraviolet waves, etc.?',
    correctAnswer: 'Electromagnetic Radiation',
    incorrectAnsers: [ 
      'Daltons',
     'Sound Waves',
     'Gamma Rays'
  ]
},
{
    questions: 'What is a protein that acts as a biological catalyst?',
    correctAnswer: 'Enzyme',
    incorrectAnsers: [ 
      'Ester',
     'Ether',
     'Enantiomer'
  ]
},
{
    questions: 'What is the measure of the disorder of a system?',
    correctAnswer: 'Entropy',
    incorrectAnsers: [ 
      'Enthalpy',
     'Messier',
     'Chaos'
  ]
},
{
    questions: 'What process produces ethanol from sugars by the action of yeast or bacteria?',
    correctAnswer: 'Fermentation',
    incorrectAnsers: [ 
      'Photosynthesis',
     'Cellular Respiration',
     'Acidification'
  ]
},
{
    questions: 'What is the time required for one-half of the nuclei of a radioisotope sample to decay?',
    correctAnswer: 'Half-life',
    incorrectAnsers: [ 
      'Half-cell',
     'Half-reaction',
     '8 years'
  ]
},
{
    questions: 'What is the name for an element in Group 8A of the periodic table, with a full valance shell?',
    correctAnswer: 'Noble Gas',
    incorrectAnsers: [ 
      'Metalloid',
     'Metal',
     'Satisfied'
  ]
},
{
    questions: 'What is the unit of frequency, equal to one cylce per second?',
    correctAnswer: 'hertz',
    incorrectAnsers: [ 
      'Electromagnetic Radiation',
     'Daltons',
     'Newtons'
  ]
},
{
    questions: 'What kind of molecule has one side slightly negative and the other side slightly positive?',
    correctAnswer: 'Polar',
    incorrectAnsers: [ 
      'Ionic',
     'Electric',
     'Acidic'
  ]
},
{
    questions: 'What kind of bond has atoms that are shared unequally?',
    correctAnswer: 'Polar Covalent',
    incorrectAnsers: [ 
      'Ionic',
     'Isotopic',
     'Brotherhood'
  ]
},
{
    questions: 'What is a quantum of light, a discrete bundle of electromagnetic energy that interacts with matter similarly to particles?',
    correctAnswer: 'Photon',
    incorrectAnsers: [ 
      'Neutron',
     'Electron',
     'Positron'
  ]
},
{
    questions: 'What is the process by which nuclei emit particles and rays?',
    correctAnswer: 'Radioactivity',
    incorrectAnsers: [ 
      'Emulsion',
     'Evolution',
     'Entropy'
  ]
},
{
    questions: 'What is an isotope that has an unstable nuclei and undergoes radioactive decay?',
    correctAnswer: 'Radioisotope',
    incorrectAnsers: [ 
      'Positron',
     'Hydrogen',
     'Cation'
  ]
},
{
    questions: 'What is a very large molecule formed by the covalent bonding of repeating monomers?',
    correctAnswer: 'Polymer',
    incorrectAnsers: [ 
      'Isomer',
     'Merkel Disc',
     'Polar Molecule'
  ]
},
{
    questions: 'What is a quantum mechanical property fo electrons that may be thought of as clockwise or counterclockwise?',
    correctAnswer: 'Spin',
    incorrectAnsers: [ 
      'Time',
     'Quarks',
     'pH'
  ]
},
{
    questions: 'What are molecules that have atoms in the same order, but which differ in the arrangement of the atoms in space?',
    correctAnswer: 'Stereoisomers',
    incorrectAnsers: [ 
      'Isotopes',
     'Anions',
     'Quarks'
  ]
},
{
    questions: 'What is the process in which a solid changes to a gas or vapor without passing through the liquid state?',
    correctAnswer: 'Sublimation',
    incorrectAnsers: [ 
      'Sublime',
     'Evaporation',
     'Condensation'
  ]
},
{
    questions: 'What is any substance that interferes with the hydrogen bonding between water molecules and thereby reduces surface tension(i.e. soap)?',
    correctAnswer: 'Surfactant',
    incorrectAnsers: [ 
      'Solute',
     'Solvent',
     'Titrate'
  ]
},
{
    questions: 'What is the measure of the average kinetic energy of particles in matter, which determines the direction?',
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