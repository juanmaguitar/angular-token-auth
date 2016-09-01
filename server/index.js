const express = require('express');
const bodyParser = require('body-parser');

const authenticate = require('./routes/authenticate');
const restrictedRoutes = require('./routes/restrictedApi');

var app = express();

app.use(bodyParser.json());
app.use('/', express.static( `${__dirname}/../public`) );

app.use( (err, req, res, next) => {
  if (err.constructor.name === 'UnauthorizedError') {
    console.log("UnauthorizedError from middleware...")
    res.status(401).send('Unauthorized');
  }
});

app.use('/', authenticate)
app.use('/api', restrictedRoutes)

app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});
