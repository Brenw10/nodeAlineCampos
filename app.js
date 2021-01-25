const express = require('express');
const cors = require('cors');
const auth = require('./src/routes/auth');
const user = require('./src/routes/user');
const treatment = require('./src/routes/treatment');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(auth);

app.use('/user', user);
app.use('/treatment', treatment);

app.listen(port);