const express = require('express');
const router = express.Router();
const actions = require('../../actions');

router.get('', actions.feeds.getFeeds);
router.post('/update', actions.feeds.updateFeeds);

module.exports = router;
