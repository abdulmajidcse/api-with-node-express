const { checkSchema } = require("express-validator");

const validation = checkSchema({
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
});

module.exports = validation;