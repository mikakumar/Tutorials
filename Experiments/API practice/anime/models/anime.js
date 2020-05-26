//invoke mongoose 

let mongoose = require('mongoose')
	Schema = mongoose.Schema;

let AnimeSchema = new Schema({
	name: String,
	genre: String,
	episodes: Number,
	seasons: Number,
	isAdult: Boolean,
	imageURL: String
});

let Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;