const mongoose = require('mongoose');
const Joi = require('joi');

// const genresSchema = new mongoose.Schema({
//     name: String,
// });

// module.exports = mongoose.model('Genre', genreSchema);

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenres(genre){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(genre);
}

exports.Genre = Genre;
exports.genreSchema = genreSchema;
exports.validate = validateGenres;