const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema ({
    date: Date,
    
    millSecTime: Number,

    month: Number,

    monthName: String,

    dayOfYear: Number,

    dayOfMonth: Number,

    dayOfWeek: String,

    year: Number,

    amount: {
        type: Number,
        required: "Must include an amount in this transaction"
    },

    description: String, //from bank of america, groceries, etc.

    category: String, //savings, income, expense
    accountID: String
});

var Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
