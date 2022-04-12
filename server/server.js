const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')


// Load env config
dotenv.config({path: './config/config.env'});

// Load DB
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())


app.use(morgan('dev'))

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
  res.send("hello")
})
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT} in ${process.env.NODE_ENV} `);
})