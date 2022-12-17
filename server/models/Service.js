const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: String,
    trim: true,
    required: true
  }
},
{
  toJSON: {
      getters: true,
    },
    id: false,
},
);

const Service = model('Service', serviceSchema);

module.exports = Service;