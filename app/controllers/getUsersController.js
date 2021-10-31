const User = require("../models/user");

async function getUsers(req, res) {
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
}

module.exports = getUsers;