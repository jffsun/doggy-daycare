const db = require('./connection');
const { User, Pet, Service } = require('../models');

db.once('open', async () => {
  await Pet.deleteMany();

  const pets = await Pet.insertMany([
    {
      name: 'Raven',
      dob: '05/10/2014',
      gender: 'F',
      breed: 'Toy Fox Terrier',
      medication: 'Vetamin, Furosemide'
    },
    {
      name: 'AXL',
      dob: '12/08/2011',
      gender: 'M',
      breed: 'Maltipoo',
    },
    {
      name: 'Moon',
      dob: '05/16/2020',
      gender: 'M',
      breed: 'Corgi Australian Sheperd',
    },
    {
      name: 'Mochi',
      dob: '08/26/2010',
      gender: 'F',
      medication: 'Gabapentin'
    },
  ]);

  console.log('pets seeded');

  // TO DO : Figure out how to link pets to users in seed data
  // await User.deleteMany();

  // const users = await User.insertMany([
  //   {
  //     firstName: 'Ethan',
  //     lastName: 'Johnson',
  //     email: 'ejohnson@testmail.com',
  //     password: 'password1234',
  //     pets :[
  //       {
  //         pets: [pets[0]._id, products[1]._id]
  //       }
  //     ]
  //   },
  //   {
  //     firstName: 'Misty',
  //     lastName: 'Acosta',
  //     email: 'misty@testmail.com',
  //     password: 'password1234',
  //     pets: [
  //       {
  //         pets: [products[0]._id, products[0]._id, products[1]._id]
  //       }
  //     ]
  //   },
  //   {
  //     firstName: 'Kelly',
  //     lastName: 'Hurst',
  //     email: 'kellyh@testmail.com',
  //     password: 'password1234',
  //     pets: [
  //       {
  //         pets: [products[0]._id, products[0]._id, products[1]._id]
  //       }
  //     ]
  //   },
  // ]);

  console.log('users seeded');

  await Service.deleteMany();

  const services = await Service.insertMany([
    {
      name: 'Boarding',
      price: 74
    },
    {
      name: 'Bath',
      price: 34
    },
    {
      name: 'Daycare',
      price: 48
    },
  ]);

  console.log('services seeded');

  process.exit();
});
