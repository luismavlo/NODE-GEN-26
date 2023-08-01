const catchAsync = require('../utils/catchAsync');
const Post = require('../models/post.model');

exports.findAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.findAll({
    where: {
      status: 'active',
    },
    attributes: {
      exclude: ['status'],
    },
  });

  return res.status(200).json({
    status: 'success',
    results: posts.length,
    posts,
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const { title, content } = req.body;
  const { id: userId } = req.sessionUser;

  const post = await Post.create({ title, content, userId });

  return res.status(201).json({
    status: 'success',
    message: 'the post has been created!',
    post,
  });
});

exports.findOnePost = catchAsync(async (req, res, next) => {
  return res.status(200).json(/* valor a retornar */);
});

exports.updatePost = catchAsync(async (req, res, next) => {
  return res.status(200).json(/* valor a retornar */);
});

exports.deletePost = catchAsync(async (req, res, next) => {
  return res.status(200).json(/* valor a retornar */);
});
