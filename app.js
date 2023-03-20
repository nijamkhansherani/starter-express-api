const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://nijamakhan373:zJ1xO3xWnwEDene3@nijam.zrcpiun.mongodb.net/test'
const client = new MongoClient(url);
const dbName = 'NijamDataBase';

async function db() {
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName)
  const collection = db.collection('products');

  return collection;
}

module.exports= db;