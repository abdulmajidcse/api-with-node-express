const User = require("../models/user");
const { validationResult } = require("express-validator");

async function userCreate (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      // create user collection
      const createUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.json({
        success: true,
        message: "User created.",
        user: createUser,
      });
    } catch (error) {
      res.status(422).json({
        error: "Something went wrong to create user.",
      });
    }
  }

module.exports = userCreate;