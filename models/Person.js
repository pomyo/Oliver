const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstName: {
        type: String,
        required: "You must include a first name"
    },

    lastName: {
        type: String,
        required: "You must include a last name"
    },

    middleName: {
        type: String
    }
});

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
