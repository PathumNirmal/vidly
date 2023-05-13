const express = require('express');
const router = express.Router();
const {Movie} = require('../models/movie');
const {Customer} = require('../models/customer');
const {Rental, validate} = require('../models/rental');

router.get('/', async(req, res) => {
    rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

// router.get('/:id', async(req, res) => {
//     rental = Rental.findById(req.params.id);
//     if(!rental) return res.status(400).send('No rental details for this id.');
//     res.send(rental);
// });

router.post('/', async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const movie = await Movie.findById(req.body.movieId);
    if(!movie) return res.status(400).send('Invalid Movie');

    console.log(movie);

    const customer = await Customer.findById(req.body.customerId);
    if(!customer) return res.status(400).send('Invalid Customer');

    console.log(customer);

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            isGold: customer.isGold,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });
    rental = await rental.save();

    movie.numberInStock--;
    movie.save();

    res.send(rental);
});

module.exports = router;