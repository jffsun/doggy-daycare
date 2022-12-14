const db = require('./connection');
const { User, Pet, Service } = require('../models');

db.on('error', (err) => err);

db.once('open', async () => {
  await Pet.deleteMany({});

  const pets = await Pet.insertMany([
    {
      name: 'Raven',
      dob: '05/10/2014',
      gender: 'F',
      breed: 'Toy Fox Terrier',
      medication: 'Vetamin, Furosemide',
      image: 'data:image/png;base64,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'
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

  // console.log('users not seeded');

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
