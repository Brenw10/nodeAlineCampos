const express = require('express');
const treatment = require('../services/treatment');

const router = express.Router();

router.get('/', (_, res) =>
  treatment
    .getAll()
    .then(result => res.send(result))
);

module.exports = router;