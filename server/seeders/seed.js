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

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('data seeded/deleted!');
  process.exit(0);
});