const mongoose = require("mongoose");
const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

function connectDB() {

    mongoose.connect("mongodb+srv://sankersiddu_db_user:Siddu037@cluster0.h7kry9f.mongodb.net/Sanker");

    mongoose.connection.on("connected", function () {
        console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", function (err) {
        console.log(err);
    });

}

module.exports = connectDB;
