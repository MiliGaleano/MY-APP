const express = require('express');
var router = express.Router();
const itinerariomodelos = require('../itinerarymodel/itinerarymodel');


router.get('/itineraries', (req, res) => {
  itinerariomodelos.find((err, itineraries) => {
        if (err) {
            console.log('error de conexión');
            return res.status(500).json({ err: 'Error al consultar itinerario'})
        } res.status(200).json({itineraries});
    });
});

router.post('/itineraries', (req, res) => {
    const title = req.body.title;
    const profile_picture = req.body.profile_picture;
    const rating = req.body.rating;
    const duration = req.body.duration;
    const price = req.body.price;
    const hashtags = req.body.hashtags;
    const cityid = req.body.cityid;
    const itinerario = new itinerariomodelos({
    title: title,
    profile_picture: profile_picture,
    rating: rating,
    duration: duration,
    price: price,
    hashtags: hashtags,
    cityid: cityid
    });

    itinerario.save((err, itinerarioStored) => {
    if (err) res.status(500).json ({message: 'Error al guardar'});
    res.status(200).json({itinerario:itinerarioStored});
    });
  });


  router.get('/itineraries/:cityid',
	(req, res) => {
  		let cityRequested = req.params.cityid;
  		itinerariomodelos.find({ cityid: cityRequested })
			.then(itinerary => {
				res.send(itinerary)
			})
			.catch(err => console.log(err));
});

module.exports = router;