const mongoose = require("mongoose");
const database = require('../config/database');

mongodbConnect().catch((err) => console.log(err));

async function mongodbConnect() {
  await mongoose.connect(database.uri);
}

module.exports = mongoose;