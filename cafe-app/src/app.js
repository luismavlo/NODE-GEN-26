const express = require("express");

//routes
const productRouter = require("./routes/products.route");

const app = express();

app.use(express.json());

app.use("/api/v1/products", productRouter);
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/categories", categoriesRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
