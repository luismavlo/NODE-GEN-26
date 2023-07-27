const express = require('express');

//controllers
const authController = require('./../controllers/auth.controller');

//middlewares
const validationMiddleware = require('./../middlewares/validations.middleware');

const router = express.Router();

router.post(
  '/signup',
  validationMiddleware.createUserValidation,
  authController.signUp
);

router.post(
  '/signin',
  validationMiddleware.loginUserValidation,
  authController.signIn
);

module.exports = router;
