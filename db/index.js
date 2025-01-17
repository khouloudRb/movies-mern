const mongoose = require('mongoose');
const models = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/movieNameSearch', 
  { 
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
.catch(e => {
  console.error('Connection error', e.message)
})

const db = mongoose.connection;
  
module.exports = db;