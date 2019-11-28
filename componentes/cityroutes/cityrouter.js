const express = require('express');
var router = express.Router();
const ciudadmodelos = require('../citymodels/citymodels');


router.get('/city', (req, res) => {
    cities.find({}, function(err, cities) {
    //ciudadmodelos.find((err, cities) => {
        // if (err) {
            // console.log('error de conexión');
            // return res.status(500).json({ err: 'Error al consultar ciudad'})
            itineraries.populate(cities, {path: "itineraries"},function(err, cities)
        } res.status(200).json({cities});
    });
});
});

router.post('/city', (req, res) => {
    const city = req.body.city;
    const country = req.body.country;
    const ciudad = new ciudadmodelos({
    city: city,
    country: country
    });

    ciudad.save((err, ciudadStored) => {
    if (err) res.status(500).json ({message: 'Error al guardar'});
    
    res.status(200).json({ciudad:ciudadStored});
    });
  });

module.exports = router;