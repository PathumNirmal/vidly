const Joi = require('joi');

module.exports = function() {
    Joi.objectId = require('joi-objectid')(Joi); // meka metana index file eke dammama one tanaka aya define nokara use karanna puluwan.
}