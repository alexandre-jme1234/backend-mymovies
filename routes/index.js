var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const TMDB_API_KEY = process.env.TMDB_API_KEY;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      res.json({ movies: data });
    });
 });

module.exports = router;
