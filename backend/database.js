const mongoose = require('mongoose');

//URL DATABASE CONNECT 
const URI = 'mongodb://localhost/moviesApp'


mongoose.connect(URI)
    .then(db => console.log('is connect!!!!'))
    .catch(err => console.error(err));

module.exports = mongoose;