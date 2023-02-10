const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
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
    required: [true, 'Dni is required'],
    unique: [true, "This Dni is registered"],
  },
    phone: {
    type: Number,
    required:[true, "Phone number is required"],
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, "Email required"],
    unique: [true, "This email is registered"],
  },
  password: {
    type: String,
    required: true,
  },
  nursery:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'nursery',
    required: [function() {return this.role !== 'admin'}, 'Nursery is required for workers']
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;