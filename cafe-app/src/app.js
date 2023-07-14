const express = require("express");

//routes
const productRouter = require("./routes/products.route");

const app = express();

app.use(express.json());

//!desde aqui

const updateProduct = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: "hello from the update route with id",
    id,
  });
};

const deleteProduct = (req, res) => {
  console.log(req.params);

  res.status(200).json({
    ok: true,
    parametros: req.params,
  });
};

app.patch("/api/v1/products/:id", updateProduct);

app.delete("/api/v1/products/:id", deleteProduct);

//!hasta aqui

app.use("/api/v1/products", productRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
