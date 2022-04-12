const mongoose = require("mongoose");

const getDBConnection = async () => {
  try {
    let connectionOptions = {
      user: process.env.USER,
      pass: process.env.PASSWORD,
      dbName: process.env.maple,
    };

    const dbConnection = mongoose.connect(
      process.env.MONGODB_URI,
      connectionOptions
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports =  getDBConnection;
