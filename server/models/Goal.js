// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// const commentSchema = require('./Comment');
// const milestoneSchema = require('./Milestone');
const dateFormat = require('../utils/dateFormat');

const goalSchema = new Schema(
  {
    goalTitle: {
      type: String,
      required: 'You need name your Goal!',
      minlength: 1,
      maxlength: 280
    },
    goalDescription: {
        type: String,
        required: 'You need name a goal Description!',
        minlength: 1,
        maxlength: 280
    }, 
    goalStatus: {
      type: String,
      default: "Planned",
      minlength: 1,
      maxlength: 280
    },
    goalCategory: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    // startDate: {
    //   type: Date,
    //   // default: Date.now,
    // },
    // dueDate: {
    //   type: Date,
    //   // default: () => new Date(+new Date() + 7*24*60*60*1000)
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      //get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    milestones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Milestone'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
    // milestones: [milestoneSchema],
    // comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

goalSchema.virtual('commentCount').get(function() {
  return this.comment.length;
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
