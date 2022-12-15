const db = require('../config/connection');
const { User, Pet, Service } = require('../models');
const petSeeds = require('./petSeeds.json')
const userSeeds = require ('./userSeeds.json')
const serviceSeeds = require ('./serviceSeeds.json')

db.once('open', async () => {
  try {

    await User.deleteMany({});
    await Pet.deleteMany({});
    await Service.deleteMany({});

    await User.create(userSeeds);
    await Service.create(serviceSeeds);
    
    // For each pet in petSeeds, create the pet at petSeeds[i] and pluck its _id and owner
    for (let i = 0; i < petSeeds.length; i++) {
      const { _id, petInfo } = await Pet.create(petSeeds[i]);

      // Find user by the owner name
      const user = await User.findOneAndUpdate(
        { _id: _id },
        { // Add the pet's info to the user's 'pets' array
          $addToSet: {
            pets: petInfo,
          },
        }
      );
    };
 
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('data seeded!');
  process.exit(0);
});