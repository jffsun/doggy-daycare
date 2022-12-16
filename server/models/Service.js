const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  date: {
    type: String,
    trim: true
  },
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