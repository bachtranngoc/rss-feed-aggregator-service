const express = require('express');
const router = express.Router();
const actions = require('../../actions');

router.get('', actions.providers.getFeedProviders);

module.exports = router;
