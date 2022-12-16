const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
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