const db = require('../../utils/db');
const config = require('../../../config');

const getFeedProviders = (req, res) => {
    const client = db.getClient();
    client.connect()
        .then((client) => {
            const db = client.db(config.dbName);
            return db.collection('feedProviders').find({}).toArray();
        }).then((providers) => {
            res.status(200).send(providers);
        }).catch((error) => {
            res.status(500).send({
                error: error
            });
        }).finally(() => {
            client.close();
        });
};

const action = {
    getFeedProviders: getFeedProviders
};

module.exports = action;
