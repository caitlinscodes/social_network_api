const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  //Don't know what this below section does
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;
