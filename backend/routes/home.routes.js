const express = require('express');
const router = express.Router();
const request = require('request');

const API_KEY = 'c3f8781a0b183d020ab41421d293ba5c';
const URL_API = 'https://api.themoviedb.org/3'


router.get('/popular', async (req, res) => {
    request(URL_API+'/discover/movie?api_key='+API_KEY+'&language=en-US&sort_by=popularity.desc', async (err, body) =>{
        res.send(body.body); 
    });
});

router.post('/search', async (req, res) => {
    request(URL_API+'/search/movie?api_key='+API_KEY+'&query='+req.body.searchStr+'&language=en-US&include_adult=false&include_video=false&page=1', async (err, body) =>{
        res.send(body.body); 
    });
});

router.post('/movie', async (req, res) => {
    request(URL_API+'/movie/'+req.body.id+'?api_key='+API_KEY+'&language=en-US', async (err, body) =>{
        res.send(body.body); 
    });
});

module.exports = router; 