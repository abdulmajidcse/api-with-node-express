const dotenv = require('dotenv');
dotenv.config();

const app = {
    "name": process.env.APP_NAME ? process.env.APP_NAME : 'API',
    "port": process.env.PORT ? process.env.PORT : 3000
};

module.exports = app;