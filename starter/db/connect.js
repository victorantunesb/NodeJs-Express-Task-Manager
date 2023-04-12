const mongoose = require('mongoose');

const connectDB = (url)=>{
   return mongoose.connect(url,console.log(`Try connect to the DB...`))
}


module.exports = connectDB;