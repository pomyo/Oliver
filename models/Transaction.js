const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    date: {
        type: Date,
        required: "This transaction must include a date"
    },

    amount: {
        type: Number,
        required: "Must include an amount in this transaction"
    },

    for: {
        type: String,
        required: "Must include the target of this transaction"
    },

    category: String,
    accountID: String
});

var Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
