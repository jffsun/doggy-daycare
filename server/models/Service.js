const { Schema, model } = require('mongoose');
const Pet = require('./Pet');

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
},
);

const Service = model('Service', serviceSchema);

module.exports = Service;