const {Schema, model} = require('mongoose');

const petSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number, 
        },
        gender: {
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

const Pet = model('Pet', petSchema);

module.exports = Pet;
