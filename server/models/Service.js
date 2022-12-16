const { Schema, model } = require('mongoose');
const Pet = require('./Pet');

const serviceSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  startTime: {
    type: String,
  },
  price: {
    type: Number,
  },
},
);

const Service = model('Service', serviceSchema);

module.exports = Service;