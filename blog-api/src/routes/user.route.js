const express = require('express');

const userController = require('./../controllers/user.controller');

const router = express.Router();

router.get('/', userController.findAllUsers);

router
  .route('/:id')
  .get(userController.findOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
