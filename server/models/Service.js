const mongoose = require('mongoose');
const { Schema } = mongoose;
const Pet = require('./Pet');

const serviceSchema = new Schema({
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
  price: {
    type: Number,
    required: true,
    trim: true
  },
},
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;