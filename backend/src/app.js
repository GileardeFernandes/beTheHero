const Express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);
app.use(errors());

module.exports = app;