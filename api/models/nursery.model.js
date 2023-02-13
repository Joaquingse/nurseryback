const mongoose = require('mongoose');
require('mongoose-type-email');

const nurserySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name of the nursery is required'],
  },
  phone: {
    type: Number,
    required: [true, 'Phone number is required'],
    unique: [true, 'This phone number is registered'],
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, "Email required"],
    unique: [true, "This email is registered"],
  },
  address: {
    type:  String,
    required: [true, "Name is required"],
    unique: [true, "This address is registered"]
  },
})

const nurseryModel = mongoose.model('nursery', nurserySchema)
module.exports = nurseryModel