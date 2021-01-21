const express = require('express');
const router = express.Router();

router.get('/', (_, res) =>
  res.send({ name: 'user' })
);

module.exports = router;