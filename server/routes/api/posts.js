const express = require('express');
const router = express.Router();

const upload = require('../../middleware/upload');
const Post = require('../../models/Post');

// @route    GET api/posts
// @desc     Get All posts
// @access   TBD
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ created: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// @route    POST api/posts
// @desc     Create a post
// @access   TBD
router.post('/', upload.single('postImage'), async (req, res) => {
  const post = new Post({
    postText: req.body.postText,
    postImage: req.file.path,
  });
  console.log(req.file);

  try {
    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
