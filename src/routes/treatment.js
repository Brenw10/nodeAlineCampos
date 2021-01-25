const express = require('express');
const treatment = require('../services/treatment');

const router = express.Router();

router.get('/', (_, res) =>
  treatment
    .getAll()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

module.exports = router;