const express = require('express');
const cors = require('cors');
const user = require('./src/routes/user');
const schedule = require('./src/routes/schedule');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/user', user);
app.use('/schedule', schedule);

app.listen(port);