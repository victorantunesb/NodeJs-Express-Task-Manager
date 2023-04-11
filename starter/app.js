const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js')


const port = 5000;

app.use(express.json())

app.use('/api/v1/tasks',tasks)


app.listen(port, console.log(`Server is listening on port ${port}`))