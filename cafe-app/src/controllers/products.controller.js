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

exports.findProduct = async (req, res) => {
  try {
    // 1. traerme el id de los parametros
    const { id } = req.params;

    //2 buscar el producto con dicho id y status true, es decir que exista
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });
    //3 valido si no existe el producto para enviar un error
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `product with id ${id} not found!`,
      });
    }
    //4. si existe se ejecuta esto y se envia la respuesta al cliente
    return res.status(200).json({
      status: "success",
      message: "product retrieved successfully!",
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

exports.updateProduct = async (req, res) => {
  try {
    //1. me traigo el id del producto a actualizar
    const { id } = req.params;
    //2. me traigo los datos a actualizar
    const { quantity, price, isNew } = req.body;

    //3. buscar el producto a actualizar
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });
    //4. validar si existe el producto, en caso de que no, enviar un error.
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `product with id ${id} not found!`,
      });
    }
    //5. actualizar el producto encontrado
    const productUpdated = await product.update({
      quantity,
      price,
      isNew,
    });

    //6. enviar la respuesta al cliente
    res.status(200).json({
      status: "success",
      message: "product updated successfully!",
      product: productUpdated,
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

exports.deleteProduct = async (req, res) => {
  try {
    //1. me traigo el id del producto a eliminar
    const { id } = req.params;

    //2. buscar el producto a eliminar
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });

    //3. validar si existe el producto, en caso de que no, enviar un error.
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `product with id ${id} not found!`,
      });
    }

    //4. eliminar el producto encontrado, Es decir producto con p minuscula
    // await product.destroy();
    await product.update({ status: false });

    res.status(200).json({
      status: "success",
      message: "product deleted successfully!",
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
