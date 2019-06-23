const feeds = require('./feeds');
const providers = require('./providers');
const configurations = require('./configurations');

const action = {
    feeds: feeds,
    providers: providers,
    configurations: configurations
};

module.exports = action;
