const express = require('express');
const expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt

const router = express.Router();
const secret = 'this is the secret secret secret 12356';

const restricted = require('./handlers/restricted');

// We are going to protect /api routes with JWT
router.use('/', expressJwt({ secret }) );
router.get('/restricted', restricted);

module.exports = router;