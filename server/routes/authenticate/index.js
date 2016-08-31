const express = require('express');
const router = express.Router();

const authenticate = require('./handlers/authenticate');

router.post('/authenticate', authenticate);

module.exports = router;