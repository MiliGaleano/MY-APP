const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    title: String,
    profile_picture: String,
    rating: String,
    duration: String,
    price: String,
    hashtags: String,
    cityid: String
    
});

module.exports = mongoose.model ('itineraries', itinerarySchema);

//CONECTAR EN CITY UN NUEVO ELEMENTO QUE SEA UN ARRAY DE ITINERARIOS MEDIANTE EL ID