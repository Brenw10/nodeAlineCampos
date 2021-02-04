const express = require('express');
const cors = require('cors');
const auth = require('./src/routes/auth');
const user = require('./src/routes/user');
const treatment = require('./src/routes/treatment');
const appointment = require('./src/routes/appointment');
const worktime = require('./src/routes/worktime');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(auth);

app.use('/user', user);
app.use('/treatment', treatment);
app.use('/appointment', appointment);
app.use('/worktime', worktime);

app.listen(port);