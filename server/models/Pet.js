const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema (
    {
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
        }
    }
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
