const express = require('express');

//controllers
const postController = require('../controllers/post.controller');

//middlewares
const authMiddleware = require('./../middlewares/auth.middleware');
const validationMiddleware = require('./../middlewares/validations.middleware');
const postMiddleware = require('./../middlewares/post.middleware');
const userMiddleware = require('./../middlewares/user.middleware');
const upload = require('./../utils/multer');

const router = express.Router();

router.route('/').get(postController.findAllPosts).post(
  upload.array('postImgs', 3), //?al utilizar el upload de multer, me va a permitir tener acceso a la req.files
  authMiddleware.protect,
  validationMiddleware.createPostValidation,
  postController.createPost
);

router.use(authMiddleware.protect);

router.get('/me', postController.findMyPosts);

router.get(
  '/profile/:id',
  userMiddleware.validUser,
  postController.findUserPosts
);

router
  .use('/:id', postMiddleware.validPost)
  .route('/:id')
  .get(postController.findOnePost)
  .patch(
    validationMiddleware.createPostValidation,
    authMiddleware.protectAccountOwner,
    postController.updatePost
  )
  .delete(authMiddleware.protectAccountOwner, postController.deletePost);

module.exports = router;
