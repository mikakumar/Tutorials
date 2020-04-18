let express = require('express'),
	bodyParser = require('body-parser');

	let db = require('./models');

	let app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.get('/api/anime',(req,res) => {
		db.Anime.find((err, allAnime) =>{
			if(err)
			{
				console.log('index err: ${err}');
			}
			else {
				res.json({
					anime: allAnime
				});
			}
		});
	});

	app.get('/api/anime/:id', (req, res) => {
		db.Anime.findOne({
			_id: req.params.id
		}, (err, anime) =>{
			if(err)
			{
				console.log('Cannot find anime. It\'s part of the ${err} dream. ');
			}
			res.json(anime);
		})
	});

	app.post('/api/anime', (req, res) => {
		let newAnime = new db.Anime(req.body);
		newAnime.save((err, anime) =>{
			if(err)
			{
				console.log('Save Me. Error ${err}');
			}
			console.log('Saved the new wonderland ${anime.name}');
			res.json(anime);
		});
	});

	app.put('/api/anime/:id', (req, res) => {
		let animeId = req.params.id;
		db.Anime.findOne({
			_id: animeId
		}, (err, foundAnime) =>{
			if(err)
			{
				console.log('Who are you looking for? Error ${err}');
			}
			foundAnime.name = req.body.name || foundAnime.name;
			foundAnime.genre = req.body.genre || foundAnime.genre;
			foundAnime.episodes = req.body.episodes || foundAnime.episodes;
			foundAnime.seasons = req.body.seasons || foundAnime.seasons;
			foundAnime.isAdult = req.body.isAdult || foundAnime.isAdult;
			foundAnime.imageUrl = req.body.imageUrl || foundAnime.imageUrl;
			console.log('Updating. ${foundAnime.name}');

			foundAnime.save((err, anime) =>{
				if(err)
						{
				console.log('Save Me. Error ${err}');
			}
			console.log('Updated. ${foundAnime.name}');
			});
		});
	});

	app.delete('/api/anime/:id', (req, res) => {
		let animeId = req.params.id;
		db.Anime.findOneAndRemove({
			_id: animeId
		})
		.populate('anime')
		.exec((err, deletedAnime) =>{
			if(err)
			{
				console.log('Not time to say goodbye. Error ${err}');
			}
			res.json(deletedAnime);
		})
	});

	app.listen(process.env.PORT || 5000, () =>{
		console.log('This is your brain on Anime. Welcome to http://localhost:5000/')
	})