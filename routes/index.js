var express = require('express');
var router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;

const fetch = require("node-fetch");

/* GET home page. */
router.get('/movies', function(req, res) {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // const movies = data.results.map((data, i) => {
    //   if(data.overview.length >= 250) {
    //     data.overview = data.overview.substr(0, 249)+'...'
    // }
    //   return ({data})
    // })
  })
  res.json({movies})
});

module.exports = router;
