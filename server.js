const express = require("express");
const app = express();
const configApp = require("./config/app");
const userRoutes = require("./routes/userRoutes");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.get("/", function (req, res) {
  res.send(`Welcome to ${configApp.name}`);
});

app.use("/users", userRoutes);

app.listen(configApp.port, function () {
  console.log(`App listening at http://localhost:${configApp.port}`);
});
