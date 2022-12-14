const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema (
    {
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
        }
    }
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
