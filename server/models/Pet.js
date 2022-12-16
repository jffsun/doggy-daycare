const { Schema, model } = require('mongoose');
const Service = require('./Service');

const petSchema = new Schema ({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: String,
            required: true, 
        },
        gender: {
            type: String,
            required: true,
            trim: true,
        },
        medication: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
        },
        services: [Service.schema]
    },
    {
        toJSON: {
            getters: true,
          },
          id: false,
    },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;
