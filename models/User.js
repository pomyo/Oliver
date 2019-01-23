const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: "This transaction must include a date"
    },

    username: {
        type: String,
        required: "Must include an amount in this transaction"
    },

    password: {
        type: String,
        required: "Must include the target of this transaction"
    },

    dateCreated: {
        type: Date,
        default: Date.now
    },

    active: Boolean
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
