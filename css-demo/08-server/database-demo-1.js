//Following 25 lines of code copied from website as sample 
//const { MongoClient, ServerApiVersion } = require('mongodb');

import {MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://julia_db_user:5ZKx66D6Dxej9aZ1@csc336-jj3579a.vuukl6l.mongodb.net/?appName=csc336-jj3579a";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = await client.db("sample_mflix");
    const commentsCollection = db.collection("comments");

    await commentsCollection.insertOne({name: "Mike"});

    let mike = await commentsCollection.findOne({name: "Mike"});
    console.log(mike)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
