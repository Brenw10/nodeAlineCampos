const express = require('express');
const user = require('../services/user');

const router = express.Router();

router.get('/:cpf', async ({ params }, res) =>
  res.send(await user.getByCPF(params.cpf))
);

module.exports = router;