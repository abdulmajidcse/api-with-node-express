const express = require("express");
const app = express();
const configApp = require("./config/app");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.get("/", function (req, res) {
  res.send(`Welcome to ${configApp.name}`);
});

app.post("/todos", function (req, res) {
  const response = {
    message: "Todo Created!",
    data: req.body,
    success: true,
  };

  res.send(response);
});

app.listen(configApp.port, function () {
  console.log(`App listening at http://localhost:${configApp.port}`);
});
