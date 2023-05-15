const config = require('config');

module.exports = function() {
    if(!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
        // in terminal set vidly_jwtPrivateKey=mySecureKey -- meka tama config folder eke dipu nama
    }
}