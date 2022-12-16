const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: String,
  },
},
);

const Service = model('Service', serviceSchema);

module.exports = Service;