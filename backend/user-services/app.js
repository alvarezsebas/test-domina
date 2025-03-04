const express = require("express");
const connectDB = require("./config/dataBase");
const authRoutes = require("./routes/userAuthRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

module.exports = app;
