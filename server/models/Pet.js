const { Schema, model } = require('mongoose');

const petSchema = new Schema ({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        dob: {
            type: String, 
        },
        gender: {
            type: String,
            required: true,
            trim: true,
        },
        breed: {
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
