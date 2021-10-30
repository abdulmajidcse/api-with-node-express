const express = require('express');
const router = express.Router();
const { body, validationResult, checkSchema } = require("express-validator");

router.post(
  "/",
  // body("title", "Required").notEmpty().withMessage('The title field is required.').isLength({ min: 5 }).withMessage('min character 5.'),
  // body("details").notEmpty().isLength({ min: 5 }),
  checkSchema({
    title: {
      notEmpty: true,
      errorMessage: "title is required.",
      isLength: {
        options: {
          min: 3,
        },
        errorMessage: "title is require minimum 3 charater.",
      },
    },
    details: {
      notEmpty: true,
      errorMessage: "details is required.",
      isLength: {
        options: {
          min: 5,
        },
        errorMessage: "details is require minimum 5 charater.",
      },
    },
  }),
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


module.exports = router;