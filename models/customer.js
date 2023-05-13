const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    isGold: Boolean,
    name: String,
    phone: String
}));

function validateCustomer(customer){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string().max(10).required(),
        isGold: Joi.boolean().required()
    });

    return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;