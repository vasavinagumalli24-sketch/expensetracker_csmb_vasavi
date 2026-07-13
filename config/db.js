const mongoose = require("mongoose");
const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

function connectDB() {
mongoose.connect("mongodb+srv://vasavinagumalli24_db_user:<db_password>@cluster0.twzyu3h.mongodb.net/vasavi?appname=cluster0");

    mongoose.connection.on("connected", function () {
        console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", function (err) {
        console.log(err);
    });

}

module.exports = connectDB;
