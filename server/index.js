const express = require('express');
const bodyParser = require('body-parser');

const authenticate = require('./routes/authenticate');
const restrictedRoutes = require('./routes/restrictedApi');

var app = express();

app.use(bodyParser.json());
app.use('/', express.static( `${__dirname}/../public`) );

app.use( (err, req, res, next) => {
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.use('/', authenticate)
app.use('/api', restrictedRoutes)

app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});


// const express = require('express');
// const expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt

// const router = express.Router();
// const secret = 'this is the secret secret secret 12356';

// const restricted = require('./restricted');

// // We are going to protect /api routes with JWT
// router.use( '/', expressJwt({ secret }) );
// router.get('/restricted', restricted);

// module.exports = router;