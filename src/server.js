const { MongoClient } = require('mongodb');

const uri = 'mongodb://username:passowrd@localhost:27017/your-database-name';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error){
        console.error('Error connecting to MongoDB:', error)
    }
}

connect();


//CORS

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(5000, () => {
    console.log('server started on port 5000')
});


//Create API endpoints:
    //creat API endpoints in your Node.js/Express.js server to perform CRUD operations on your MongoDB database. These endpoints will handle incoming requests from your React app and interact with the databse accordingly.