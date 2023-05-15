const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://127.0.0.1:27017/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));
}