const express = require('express')
const app = express()
const port = 8080;
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
const path = require('path')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://minster681:abc903681@cluster0.p4uwkdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.static("./client/build"))


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.post("/add", (req, res) => {
 console.log("add route hit")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})