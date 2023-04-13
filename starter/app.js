const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();




//middleware
app.use(express.static('./public'));

app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);

app.use('*', notFound);

app.use(errorHandlerMiddleware);

const port = 5000;

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