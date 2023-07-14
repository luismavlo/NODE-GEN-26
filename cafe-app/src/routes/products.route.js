const express = require("express");

const router = express.Router();

const findProducts = (req, res) => {
  res.status(200).json({
    message: "hello from the get route!",
  });
};

const createProduct = (req, res) => {
  const product = req.body;

  res.status(201).json({
    message: "hello from the post route",
    product,
  });
};

const findProduct = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: "hello from the get route with id",
    id,
  });
};

router.get("/", findProducts);

router.post("/", createProduct);

router.get("/:id", findProduct);

module.exports = router;
