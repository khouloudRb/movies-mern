const mongoose = require('mongoose');
const models = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/movieNameSearch', 
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

// const movieSeed = [
//     {
//       title: "Random Movie",
//       imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0Ae3DZ67dxAAjCnupYmVbnXSzp6Y18hLDw&usqp=CAU",
//       director: "Dennis Quaid",
//       genre: "Comedy",
//       description: "A puppy is in search of its owner",
//       released: "16 May 2018"
//     }
// ];

// models.Movie
// .remove({})
// .then(() => models.Movie.collection.insertMany(movieSeed))
// .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
// })
// .catch(err => {
//     console.error(err);
//     process.exit(1);
// });
  
module.exports = db;