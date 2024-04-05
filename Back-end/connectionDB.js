require("dotenv").config();
console.log("MONGOURL from env:", process.env.MONGOURL); // Log MONGOURL to verify if it's correctly loaded
const mongoose = require("mongoose");
const mongoURI = process.env.MONGOURL;
console.log("mongoURI:", mongoURI); // Log mongoURI to track its value
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://milansana73:Manish321m@cluster0.ssq6uve.mongodb.net/Scheme");
        console.log("DataBase Connected");

    } catch (error) {
        console.log("error:", error);
        console.log("DataBase Disconnected");
    }
}
module.exports = connectDB;
