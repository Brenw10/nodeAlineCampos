const express = require('express');
const worktime = require('../services/worktime');

const router = express.Router();

router.get('/', (_, res) =>
  worktime
    .getAll()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

module.exports = router;