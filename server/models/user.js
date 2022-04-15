const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    //required: [true, 'Please add a name'],
    trim: true
  },
  email:{
    type: String,
    index: true,
    required: [true, 'Please add an email'],
    trim: true,
    lowercase: true,
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ,
    "Please use a valid email"]
  },
  role: {
    type: String,
    enum: ['customer', 'adminstrator'],
    default: 'customer'
  },
  cart: {
    type: Array,
    default: []
  },
  address: {
    type: String,
    trim: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('User',userSchema)