// @see https://stackoverflow.com/questions/8313628/node-js-request-how-to-emitter-setmaxlisteners
require('events').EventEmitter.prototype._maxListeners = 100;
require('dotenv').config()

const app = require('./app.js');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`nodejs-pubsub-tutorial listening on port ${PORT}`)
);