const express = require("express");
const productController = require("./../controllers/products.controller");

const router = express.Router();

router.get("/", productController.findProducts);

router.post("/", productController.createProduct);

router.get("/:id", productController.findProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
