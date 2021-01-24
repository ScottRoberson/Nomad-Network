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

// @route    GET api/posts/:id
// @desc     Get a post by ID
// @access   TBD
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error.message);

    res.status(500).send('Server Error');
  }
});

// @route    POST api/posts
// @desc     Create a post
// @access   TBD
router.post('/', upload.single('postImage'), async (req, res) => {
  const post = new Post(req.body);
  if (req.file !== undefined) {
    post.postImage = req.file.filename;
  }
  try {
    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   TBD
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.remove();
    res.json({ message: 'Post removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PATCH api/posts/:id
// @desc     Update a post
// @access   TBD

router.patch('/:id', upload.single('postImage'), async (req, res) => {
  const { id } = req.params;
  const { postText } = req.body;
  const updates = {};
  if (postText) {
    updates.postText = postText;
  }
  if (req.file) {
    const postImage = req.file.filename;
    updates.postImage = postImage;
  }
  try {
    const post = await Post.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (post === null) {
      return res.status(404).json({ message: 'Post not found' });
    } else if (Object.keys(updates).length === 0) {
      return res.status(404).json({ message: 'Please update the post' });
    } else {
      res.status(201).json(post);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
