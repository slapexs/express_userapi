const express = require('express');
const router = express.Router();
const userData = require('../jsondata/users.json');
const authData = require('../jsondata/auth.json');

router.get('/', (request, response) => {
  const { limit } = request.query;
  if (!limit) {
    response.json(userData);
  } else {
    response.send(limit);
  }
});

router.get('/auth', (request, response) => {
  response.json(authData);
});

module.exports = router;
