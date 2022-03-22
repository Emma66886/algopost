const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Please enter your First Name'],
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a Password'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    activated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
