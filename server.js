const express = require("express");
const app = express();
const configApp = require("./config/app");
const todoRoutes = require("./routes/todoRoutes");
const collection = require("./database/mongodb");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.get("/", async function (req, res) {
  const getUsers = (await collection("users")).find({}).toArray();
  getUsers
    .then((response) => {
      res.json({
        users: response
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.use("/todos", todoRoutes);

app.listen(configApp.port, function () {
  console.log(`App listening at http://localhost:${configApp.port}`);
});
