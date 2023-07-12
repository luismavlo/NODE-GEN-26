const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Me ejecute!");
  res.send("Hola Mundo Desde El Servidor! 🤩");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
