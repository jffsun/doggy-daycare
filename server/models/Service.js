const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
},
);

const Service = model('Service', serviceSchema);

module.exports = Service;