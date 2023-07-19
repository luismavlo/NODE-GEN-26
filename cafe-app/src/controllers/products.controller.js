const Product = require("./../models/product.model");

exports.findProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        status: true,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "products retrieved successfully!",
      result: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
      error,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, ingredients, image, description, price, quantity } = req.body;

    const product = await Product.create({
      name,
      ingredients,
      image,
      description,
      price,
      quantity,
    });

    res.status(201).json({
      status: "success",
      message: "product created successfully!",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
      error,
    });
  }
};

exports.findProduct = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: "hello from the get route with id",
    id,
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: "hello from the update route with id",
    id,
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const { requestTime } = req;

  res.status(200).json({
    requestTime,
    message: "hello from the delete route",
    id,
  });
};
