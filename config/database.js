const dotenv = require('dotenv');
dotenv.config();

const database = {
    "url": process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost:27017',
    "dbName": process.env.MONGODB_NAME ? process.env.MONGODB_NAME : 'test',
};

module.exports = database;