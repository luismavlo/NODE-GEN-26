const express = require("express");
//controllers
const productController = require("./../controllers/products.controller");

//middlewares
const validationMiddleware = require("./../middlewares/validations.middleware");
const router = express.Router();

router
  .route("/")
  .get(productController.findProducts)
  .post(validationMiddleware.validProduct, productController.createProduct);

router
  .route("/:id")
  .get(productController.findProduct)
  .patch(validationMiddleware.validProduct, productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;

//:::::::::::::::::::::::::::::::::::::::::

// router.get("/", productController.findProducts);

// router.post(
//   "/",
//   validationMiddleware.validProduct,
//   productController.createProduct
// );
