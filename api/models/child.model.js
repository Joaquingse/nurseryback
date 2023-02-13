const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  surname: {
    type: String,
    required: [true, "username is required"],
  },
  dni: {
    type: String,
    unique: [true, "This Dni is registered"],
  },
  tutors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tutor',
    required: [true, "One Tutor is required"],
  }],
  nursery:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'nursery',
    required: true,
  }, 
  dinner: {
    type: Boolean,
    required: true,
  },
  early: {
    type: Boolean,
    required: true,
  },
  alergies: {
    type: array,
  },
  activities: {
    type: array,
  },
});

const childModel = mongoose.model('child', childSchema);
module.exports = childModel;

