const catchAsync = require('../utils/catchAsync');
const User = require('./../models/user.model');
const bcrypt = require('bcryptjs');
const generateJWT = require('./../utils/jwt');

exports.signUp = catchAsync(async (req, res) => {
  const { name, email, password, description } = req.body;

  const salt = await bcrypt.genSalt(12);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: name.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    password: encryptedPassword,
    description,
  });

  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'success',
    message: 'The user has been created',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      description: user.description,
      profileImgUrl: user.profileImgUrl,
    },
  });
});

exports.signIn = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
