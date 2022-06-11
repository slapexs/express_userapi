const express = require('express');
const app = express();
const port = 8000;

// Router
const routerUser = require('./routers/user');

// Extension express
app.use(express.urlencoded({ extended: true }));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
app.get('/', (request, response) => {
  response.send('hi~');
});

// User api
app.use('/user', routerUser);
