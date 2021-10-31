const dotenv = require('dotenv');
dotenv.config();

const database = {
    "uri": process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/test',
};

module.exports = database;