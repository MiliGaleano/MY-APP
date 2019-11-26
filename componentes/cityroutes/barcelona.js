const express = require('express');
var router = express.Router();
const ciudadmodelos = require('../citymodels/citymodels');


router.get('/:name',
	(req, res) => {
  		let cityRequested = req.params.name;
  		ciudadmodelos.findOne({ name: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});



module.exports = router;



//itineraries/:cityid