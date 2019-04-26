const mongoose = require('mongoose');
const { Schema} = mongoose;

const FavoriteMoviesSchema = new Schema ({
    backdrop_path: {type: String},
    id: {type: String},
    original_language: {type: String},
    title: {type: String},
    overview: {type: String},
    poster_path: {type: String},
    release_date: {type: String},
    vote_average: {type: String}
}); 

module.exports = mongoose.model('FavoriteMovies', FavoriteMoviesSchema);