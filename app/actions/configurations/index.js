const db = require('../../utils/db');
const config = require('../../../config');

const getConfigurations = (req, res) => {
    const client = db.getClient();
    client.connect()
        .then((client) => {
            const db = client.db(config.dbName);
            return db.collection('configurations').find({}).toArray();
        }).then((configurations) => {
            res.status(200).send(configurations[0]);
        }).catch((error) => {
            res.status(500).send({
                error: error
            });
        }).finally(() => {
            client.close();
        });
};

const setConfigurations = (req, res) => {
    const client = db.getClient();
    var database;
    client.connect()
        .then((client) => {
            database = client.db(config.dbName);
            return database.collection('configurations').deleteMany({});
        }).then(() => {
            return database.collection('configurations').insertOne(req.body);
        }).then((result) => {
            console.log('inserted config: ', result.insertedCount);
            res.status(200).send({
                success: 'successfully set configurations'
            });
        }).catch((error) => {
            console.log('error: ', JSON.stringify(error));
            res.status(500).send({
                error: error
            })
        }).finally(() => {
            client.close();
        });
};

const action = {
    getConfigurations: getConfigurations,
    setConfigurations: setConfigurations
};

module.exports = action;
