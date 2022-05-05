// Standard Node Express server imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");

// Load env config
dotenv.config({ path: "./config/config.env" });

// Database connection imports
const connectDB = require("./config/dbConnection");

// Router imports
const authRouter = require('./routes/auth')
const categoryRouter = require('./routes/category')
const subcategoryRouter = require('./routes/subcategory')
const productRouter = require('./routes/product')
const cloudinaryRouter = require('./routes/cloudinary')
// Establish database connection
connectDB();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// using router
app.use('/api',authRouter)
app.use('/api',categoryRouter)
app.use('/api',subcategoryRouter)
app.use('/api',subcategoryRouter)
app.use('/api',productRouter)
app.use('/api',categoryRouter)

//fs.readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api is running 😎");
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT} in ${process.env.NODE_ENV} `);
});
