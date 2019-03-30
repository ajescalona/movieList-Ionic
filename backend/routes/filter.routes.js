const express = require('express');
const router = express.Router();
const request = require('request');

const API_KEY = 'c3f8781a0b183d020ab41421d293ba5c';
const URL_API = 'https://api.themoviedb.org/3'


router.get('/genres', async (req, res) => {
    request(URL_API+'/genre/movie/list?api_key='+API_KEY+'&language=en-US', async (err, body) =>{
        res.send(body.body); 
    });
});

router.post('/movieByGenres', async (req, res) => {
    request(URL_API+'/discover/movie?api_key='+API_KEY+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+req.body.page+'&with_genres='+req.body.genreId.id, async (err, body) =>{
        res.send(body.body); 
    });
});


module.exports = router; 