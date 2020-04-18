let mongoose = require('mongoose');

mongoose.connect(
		process.env.MONGODB_URI || 
		'mongodb://localhost/animecrazy-api'
	);

let Anime = require('./anime');

module.exports.Anime = Anime;