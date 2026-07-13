const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker");

    mongoose.connection.on("connected", function () {
        console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", function (err) {
        console.log(err);
    });

}

module.exports = connectDB;