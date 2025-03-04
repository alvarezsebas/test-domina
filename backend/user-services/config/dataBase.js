const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado (Auth Service)");
    } catch (error) {
        console.error("Error en la conexión:", error);
        process.exit(1);
    }
};

module.exports = connectDB;