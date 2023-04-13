const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect');
require('dotenv').config();


const port = 5000;

app.use(express.static('./public'))

app.use(express.json())

app.use('/api/v1/tasks',tasks)

const start = async () => {
    try { 
       await connectDB(process.env.MONGO_URI);
       console.log(`Connect to the DB...`)
       app.listen(port, console.log(`Server is listening on port ${port}`));
    }
    catch (err) {
        console.log(err)
    }

}

start();