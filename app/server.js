const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('../config');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(routes);

app.listen(config.port, config.hostAddress, () => {
    console.log(`Server is listening on host ${config.hostAddress}, port ${config.port}`);
});
