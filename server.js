const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);

app.get("/", function (req, res) {
    res.send("Backend Server Running");
});

const PORT = 5000;

app.listen(PORT, function () {
    console.log("Server Started Successfully");
});