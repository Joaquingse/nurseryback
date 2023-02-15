const mongoose = require('mongoose');

const dropSchema = new mongoose.Schema({
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

const dropModel = mongoose.model('drop', dropSchema);
module.exports = dropModel;
