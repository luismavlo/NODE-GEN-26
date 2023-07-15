const express = require("express");
const productController = require("./../controllers/products.controller");

const router = express.Router();

const validProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name) {
    return res.status(400).json({
      status: "error",
      message: "the name is required",
    });
  }

  if (!price) {
    return res.status(400).json({
      status: "error",
      message: "the price is required",
    });
  }

  next();
};

router.get("/", productController.findProducts);

router.post("/", validProduct, productController.createProduct);

router.get("/:id", productController.findProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
