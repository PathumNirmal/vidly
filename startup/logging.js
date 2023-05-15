require('express-async-errors');
const winston = require('winston');

module.exports = function() {
    process.on('uncaughtException', (ex) => {
        // console.log('WE GOT AN UNCAUGHT EXCEPTION');
        new winston.transports.Console({ colorize: true, prettyPrint: true});
        winston.error(ex.message, ex);
        process.exit(1);
    });
    
    process.on('unhandledRejection', (ex) => {
        // console.log('WE GOT AN UNCAUGHT EXCEPTION');
        winston.error(ex.message, ex);
        process.exit(1);
    });
    
    winston.add(winston.transports.File, { filename: 'logfile.log' });
}