const express = require("express");
const connectDB = require("./config/dataBase");
const taskRoutes = require("../task-services/routes/tasksRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/tasks", taskRoutes);

module.exports = app;
