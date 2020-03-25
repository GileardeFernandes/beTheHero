const Express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);

app.listen(3333);