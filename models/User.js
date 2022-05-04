const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      //trimmed (?)
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //matching validation within mongoose
    },
    thoughts: [thoughtSchema], //array of _id values(?)
    friends: [userSchema], //same as above and referencing self
  },
  //Don't know what this below section does
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
