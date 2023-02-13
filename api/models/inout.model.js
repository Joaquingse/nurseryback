const mongoose = require('mongoose');

const inoutSchema = new mongoose.Schema({
  dropoff: [
    {
      child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'child',
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      who: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'tutor',
        required: true,
      },
    }
  ],
  pickup: [
    {
      child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'child',
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      who: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'tutor',
        required: true,
      },
    }
  ],
});

const inoutModel = mongoose.model('inout', inoutSchema);
module.exports = inoutModel;
