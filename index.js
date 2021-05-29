const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/dialogflowRoutes')(app);

app.listen(process.env.PORT);