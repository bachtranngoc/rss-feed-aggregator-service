const express = require('express');
const router = express.Router();
const feeds = require('./feeds');
const providers = require('./providers');
const configurations = require('./configurations');

router.use('/feeds', feeds);
router.use('/providers', providers);
router.use('/configurations', configurations);

router.all('*', function (req, res) {
    res.status(404).send({error: 'content not found or not supported'});
});

module.exports = router;
