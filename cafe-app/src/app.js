const express = require("express");

const app = express();

app.use(express.json());

const findProducts = (req, res) => {
  res.status(200).json({
    message: "hello from the get route!",
  });
};

//? Buscar Varios Productos
app.get("/api/v1/products", findProducts);

//*createProduct
//? Crear un producto
app.post("/api/v1/products", (req, res) => {
  const product = req.body;

  res.status(201).json({
    message: "hello from de post route",
    product,
  });
});

//*findProduct
//? Buscar un producto dado un id
app.get("/api/v1/products/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: "hello from the get route with id",
    id,
  });
});

//*updatedProduct
//? Actualizar un producto
//*deleteProduct
//? Eliminar un producto

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
