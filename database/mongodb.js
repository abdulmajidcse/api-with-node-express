const { MongoClient } = require('mongodb');
const configDb = require('../config/database');

const client = new MongoClient(configDb.url);

async function getCollection($collectionName, ) {
    await client.connect();
    console.log('Mongodb connected successfully!');
    const db = client.db(configDb.dbName);
    const collection = db.collection($collectionName);

    return collection;
}

module.exports = getCollection;