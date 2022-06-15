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

router.get('/search/', (request, response) => {
  const { user } = request.query;
  const indData = userData.findIndex((item) => item.username == user);
  if (indData !== -1) {
    response.json(userData[indData]);
  } else {
    response.json([]);
  }
});

module.exports = router;
