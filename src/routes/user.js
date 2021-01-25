const express = require('express');

const router = express.Router();

router.post('/', async ({ body }, res) =>
  res.send(body)
);

module.exports = router;