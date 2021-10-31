const express = require("express");
const router = express.Router();
const { checkSchema, validationResult } = require("express-validator");
const User = require("../app/models/user");

router.get("/", async function (req, res) {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "All User information.",
      users: users,
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      message: "Something went wrong to get users.",
    });
  }
});

router.post(
  "/",
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "The name field is required.",
      isLength: {
        options: {
          min: 3,
        },
        errorMessage: "The name field is require minimum 3 charater.",
      },
    },
    email: {
      notEmpty: true,
      errorMessage: "The email field is required.",
      isLength: {
        options: {
          min: 5,
        },
        errorMessage: "The email field is require minimum 5 charater.",
      },
    },
    password: {
      notEmpty: true,
      errorMessage: "The password field is required.",
      isLength: {
        options: {
          min: 8,
        },
        errorMessage: "The password field is require minimum 8 charater.",
      },
    },
    password_confirmation: {
      notEmpty: true,
      errorMessage: "The password confirmation field is required.",
    },
  }),
  async function (req, res) {
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
);

module.exports = router;
