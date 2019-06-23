const express = require('express');
const router = express.Router();
const actions = require('../../actions');

router.get('', actions.configurations.getConfigurations);
router.post('', actions.configurations.setConfigurations);

module.exports = router;
