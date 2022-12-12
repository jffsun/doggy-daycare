const mongoose = require('mongoose');
const { Schema } = mongoose;
const Pet = require('./Pet');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  pet: [Pet.schema] 
},
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;