const express = require('express');
const expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt
const secret = require('../../config').secret;

const router = express.Router();

const restricted = require('./handlers/restricted');

// We are going to protect /api routes with JWT
// express-jwt -> Middleware that validates JsonWebTokens and sets req.user.

// The JWT authentication middleware authenticates callers using a JWT. If the token is valid, req.user will be set with the JSON object decoded to be used by later middleware for authorization and access control.

router.use('/', expressJwt({ secret }) ); //
router.get('/restricted', restricted);

module.exports = router;
