const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    color: String,
});

const Cat = mongoose.model('Cat', catSchema, 'Cats');

module.exports = Cat;