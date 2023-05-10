const express = require('express');
const app = express();
let cors = require("cors");

const mongooseConnection = require('./helpers/mongoose-connection');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

app.use((req,res)=>{
    res.send({
        message:"Not Found!"
    })
});
mongooseConnection();
app.listen(5000,(req,res)=>{
    console.log("Listening to 5000 port");
})