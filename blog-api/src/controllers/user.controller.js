const User = require('../models/user.model');

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'active',
      },
    });

    res.status(200).json({
      status: 'success',
      users,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.findOneUser = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.updateUser = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteUser = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
