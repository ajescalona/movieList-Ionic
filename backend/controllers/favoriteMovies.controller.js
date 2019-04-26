const FavoriteMovie = require('../models/favoriteMovies');

const favoriteMovieCtrl = {};

favoriteMovieCtrl.getFavoriteMovie = async (req, res) => {
    const favoriteMovie = await FavoriteMovie.find();
    res.send(favoriteMovie);
}

favoriteMovieCtrl.createFavoriteMovie = async (req, res) => {
    const favoriteMovie = new FavoriteMovie({
        backdrop_path: req.body.backdrop_path,
        id: req.body.id,
        original_language: req.body.original_language,
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        release_date: req.body.release_date,
        vote_average: req.body.vote_average
    });
    await favoriteMovie.save();
    res.json({
        'status': 'Employee saved'
    });
}

favoriteMovieCtrl.deleteFavoriteMovie = async (req, res) => {
    await favoriteMovie.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Employee deleted'
    });
}

module.exports = favoriteMovieCtrl;