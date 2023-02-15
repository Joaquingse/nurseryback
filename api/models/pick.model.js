const mongoose = require('mongoose');

const pickSchema = new mongoose.Schema({
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
});

const pickModel = mongoose.model('pick', pickSchema);
module.exports = pickModel;
