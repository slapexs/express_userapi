const express = require('express');
const router = express.Router();

const exampleUser = {
  status: 'success',
  result: {
    username: 'admin',
    password: 123456,
    email: 'admin.work@examplemail.com',
    firstname: 'Joyce',
    lastname: 'Gray',
  },
};
router.get('/', (request, response) => {
  response.json(exampleUser);
});

module.exports = router;
