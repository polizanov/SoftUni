const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/'

const client = new MongoClient(url, { useUnifiedTopology: true })

async function run() {
    await client.connect();

    const db = client.db('it-shop');
    const products = db.collection('products');

    await products.insertOne({"type":"Phone"});

    let type = await products.findOne({});


    console.log(type);
}

run()