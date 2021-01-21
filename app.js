const express = require('express');
const user = require('./src/routes/user');
const schedule = require('./src/routes/schedule');

const app = express();
const port = 3000;

app.use('/user', user);
app.use('/schedule', schedule);

app.listen(port);