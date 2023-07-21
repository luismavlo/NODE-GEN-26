const app = require("./app");
const { db } = require("./database/config");

db.authenticate()
  .then(() => console.log("Database connected✌️..."))
  .catch((err) => console.log(err));

db.sync({ force: false })
  .then(() => console.log("Database synced✌️..."))
  .catch((err) => console.log(err));

app.listen(3200, () => {
  console.log("Server is up on port 3200");
});
