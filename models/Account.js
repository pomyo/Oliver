const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AcccountSchema = new Schema({
    alias: String,
    userID: String,
    personID: String,
    active: Boolean
});

var Acccount = mongoose.model('Acccount', AcccountSchema);

module.exports = Acccount;
