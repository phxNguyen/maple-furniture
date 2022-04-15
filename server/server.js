// Standard Node Express server imports
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')


// Load env config
dotenv.config({path: './config/config.env'});

// Database connection imports
const connectDB = require('./config/dbConnection');

// Router imports
const authRouter = require('./routes/auth')

// Establish database connection 
connectDB();

const app = express();

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))


app.use('/api',authRouter)

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
  res.send("api is running 😎")
})
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT} in ${process.env.NODE_ENV} `);
})