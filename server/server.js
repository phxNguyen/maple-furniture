// Standard Node Express server imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load env config
dotenv.config({ path: "./config/config.env" });

// Database connection imports
const connectDB = require("./config/dbConnection");

// Router imports
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const subcategoryRouter = require("./routes/subcategory");
const productRouter = require("./routes/product");
const cloudinaryRouter = require("./routes/cloudinary");
const userRouter= require('./routes/user')
const stripeRouter = require('./routes/stripe')
const couponRouter = require('./routes/coupon')
const adminRouter = require('./routes/admin')

// Establish database connection
connectDB();

const app = express();

// Middlewares

app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));
app.use(cors());
app.options("*", cors());
app.use(morgan("dev"));

// using router
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", subcategoryRouter);
app.use("/api", subcategoryRouter);
app.use("/api", productRouter);
app.use("/api", cloudinaryRouter);
app.use("/api", userRouter);
app.use("/api", couponRouter);
app.use("/api", stripeRouter);
//fs.readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api is running 😎");
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT} in ${process.env.NODE_ENV} `);
});
