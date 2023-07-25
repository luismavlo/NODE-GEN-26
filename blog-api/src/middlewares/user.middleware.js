const AppError = require('../utils/appError');
const User = require('../models/user.model');

exports.validUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
        status: 'active',
      },
    });

    if (!user) {
      return next(new AppError(`User with id: ${id} not found`, 404));
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};
