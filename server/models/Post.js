const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  postImage: {
    type: String,
  },
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
    },
  ],
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
