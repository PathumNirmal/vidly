const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi); // meka metana index file eke dammama one tanaka aya define nokara use karanna puluwan.
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

if(!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
    // in terminal set vidly_jwtPrivateKey=mySecureKey -- meka tama config folder eke dipu nama
}

mongoose.connect('mongodb://127.0.0.1:27017/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const genres = require('./routes/genres');
const home = require('./routes/home');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rental = require('./routes/rental');
const users = require('./routes/user');
const auth = require('./routes/auth');

const app = express();
app.use(express.json());

app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rental', rental);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));