const mongoose = require("mongoose");
require("mongoose-type-email");

const tutorSchema = new mongoose.Schema({
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
    required: [true, "Dni is required"],
    unique: [true, "This Dni is registered"],
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, "Email required"],
    unique: [true, "This email is registered"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  relation: {
    type: String,
    enum: ["parents", "family", "others"],
    required: [true, "Relation is required"],
  },
});

const tutorModel = mongoose.model("tutor", tutorSchema);
module.exports = tutorModel;
