const Transaction = require("../models/transaction");

async function getTransactions(req, res) {

    try {

        const data = await Transaction.find();

        res.json(data);

    }
    catch(error){

        res.status(500).json({
            message: error.message
        });

    }

}

async function addTransaction(req, res){

    try{

        const transaction = new Transaction({

            title: req.body.title,
            amount: req.body.amount,
            category: req.body.category,
            type: req.body.type,
            date: req.body.date

        });

        await transaction.save();

        res.json({
            message: "Transaction Added Successfully"
        });

    }
    catch(error){

        res.status(500).json({
            message: error.message
        });

    }

}
async function deleteTransaction(req, res){

    try{

        await Transaction.findByIdAndDelete(req.params.id);

        res.json({
            message: "Transaction Deleted Successfully"
        });

    }
    catch(error){

        res.status(500).json({
            message: error.message
        });

    }

}
async function updateTransaction(req, res){

    try{

        await Transaction.findByIdAndUpdate(req.params.id, {

            title: req.body.title,
            amount: req.body.amount,
            category: req.body.category,
            type: req.body.type,
            date: req.body.date

        });

        res.json({
            message: "Transaction Updated Successfully"
        });

    }
    catch(error){

        res.status(500).json({
            message: error.message
        });

    }

}
module.exports = {

    getTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction

};
