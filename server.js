const express = require("express");
const app = express();
const configApp = require("./config/app");
const { body, validationResult } = require("express-validator");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.get("/", function (req, res) {
  res.send(`Welcome to ${configApp.name}`);
});

app.post(
  "/todos",
  body("title").notEmpty().isLength({ min: 3 }),
  body("details").notEmpty().isLength({ min: 5 }),
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const response = {
      success: true,
      data: req.body,
    };

    res.json(response);
  }
);

app.listen(configApp.port, function () {
  console.log(`App listening at http://localhost:${configApp.port}`);
});
