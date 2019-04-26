const express = require('express');
const router = express.Router();

const favoriteMovieCtrl = require('../controllers/favoriteMovies.controller');

router.get('/favoriteMovies', favoriteMovieCtrl.getFavoriteMovie);
router.post('/favoriteMovie', favoriteMovieCtrl.createFavoriteMovie);
router.delete('/:id', favoriteMovieCtrl.deleteFavoriteMovie);

module.exports = router;