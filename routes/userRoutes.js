const express = require("express");
const router = express.Router();
const getUsers = require('../app/controllers/getUsersController');
const userCreate = require('../app/controllers/userCreateController');
const userCreateValidation = require('../app/validations/userCreateValidation');

router.get("/", getUsers);

router.post('/', userCreateValidation, userCreate);

module.exports = router;
