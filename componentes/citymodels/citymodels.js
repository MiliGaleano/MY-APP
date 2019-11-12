const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ciudadesSchema = new Schema({
    city: String,
    country: String
});

module.exports = mongoose.model ('cities', ciudadesSchema);

