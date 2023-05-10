let mongoose = require('mongoose');

const mongooseurl = "mongodb+srv://sethrock420:sethrock420@cluster0.qucf8ez.mongodb.net/?retryWrites=true&w=majority"

function mongooseconnnection(){
    mongoose.connect(mongooseurl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
  });
}



const dbConnection = mongoose.connection;

dbConnection.on("error",(err)=>console.log(`Connection error${err}`))

dbConnection.once("open",()=>
    console.log("Connected to DB!")
);

 module.exports = mongooseconnnection;