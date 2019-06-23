const request = require('request-promise-native');
const db = require('../../utils/db');
const config = require('../../../config');

const getFeeds = (req, res) => {
    const client = db.getClient();
    client.connect()
        .then((client) => {
            const db = client.db(config.dbName);
            var feedProvider = req.query.feedProvider;
            var filter = feedProvider ? { feedProvider: feedProvider } : {};
            return db.collection('feedRecords').find(filter).toArray();
        }).then((feeds) => {
            res.status(200).send(feeds);
        }).catch((error) => {
            res.status(500).send({
                error: error
            });
        }).finally(() => {
            client.close();
        });
};

const updateFeeds = (req, res) => {
    const requestUrl = `http://${config.backendHostAddress}:${config.backendPort}/feeds/update`;
    request.post(requestUrl, { json: true} )
        .then((response) => {
            res.status(200).send(response);
        }).catch((response) => {
            res.status(response.statusCode).send(response.error);
        });
};

const action = {
    getFeeds: getFeeds,
    updateFeeds: updateFeeds
};

module.exports = action;
