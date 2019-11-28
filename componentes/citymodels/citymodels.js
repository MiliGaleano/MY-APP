const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ciudadesSchema = new Schema({
    city: String,
    country: String,
    itineraries: { type: Schema.ObjectId, ref: "itineraries" }
});

module.exports = mongoose.model ('cities', ciudadesSchema);

