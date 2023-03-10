const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

//Get Post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log({ message: err });
  }
});

//Submit Post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    console.log({ message: err });
  }
});

//Get specific post
router.get("/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.json(post);
});

//Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    console.log({ message: err });
  }
});

//Update Post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    console.log({ message: err });
  }
});

module.exports = router;
