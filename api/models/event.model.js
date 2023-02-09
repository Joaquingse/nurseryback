const mongoose = require('mongoose');
require('mongoose-type-email');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title of the event is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date of the event is required'],
  },
  attendance: {
    type: Number,
  },
  description: {
    type: String,
  },
})

const eventModel = mongoose.model('event', eventSchema)
module.exports = eventModel