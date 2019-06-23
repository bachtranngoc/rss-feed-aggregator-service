const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('../config');

app.use(bodyParser.json());
app.use(routes);

app.listen(config.port, config.hostAddress, () => {
    console.log(`Server is listening on host ${config.hostAddress}, port ${config.port}`);
});
