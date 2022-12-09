const { Schema } = require('mongoose');

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

module.exports = petSchema
