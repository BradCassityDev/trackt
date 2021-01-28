const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const milestoneSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 280
    },
    status: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = milestoneSchema;
