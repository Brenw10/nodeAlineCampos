const express = require('express');
const user = require('../services/user');

const router = express.Router();

router.get('/', async (_, res) => res.send(await user.getByCPF()));

module.exports = router;