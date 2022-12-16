const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  date: {
    type: String,
  },
  price: {
    type: Number,
  },
},
);

const Service = model('Service', serviceSchema);

module.exports = Service;