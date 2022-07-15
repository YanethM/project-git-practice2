const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ApiRoutes = require("./src/routes");
require("dotenv").config();

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log("Puerto activo ", port);
});

mongoose
  .connect(process.env.STRING_CONNECTION_MONGOOSE)
  .then(() => console.log("Conexiòn exitosa"))
  .catch((err) => console.error(err));

app.use(express.json());
ApiRoutes(app);
