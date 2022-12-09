const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-food.jpg',
    founded: 1989,
    rating:'Not Rated'
},
{
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020,
    rating:'Not Rated'
}])
.then(() => {
    console.log('Seed Success!')
    process.exit()
})
.catch(err => {
    console.log('Seed Failure!', err)
    process.exit()
})
