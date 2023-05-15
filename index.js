const express = require('express');
const app = express();

require('./startup/logging'); // meka mulinma danawa
require('./startup/routes') (app);
require('./startup/db')(); // to call the export function
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));