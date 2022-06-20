const express = require('express');
const app = express();
const port = 8000;
const hbs = require('hbs');

// Router
const routerUser = require('./routers/user');

// Extension express
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname, '/views/partials');
app.use('/static', express.static('static'));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
app.get('/', (request, response) => {
  response.send('hi~');
});

// User api
app.use('/users', routerUser);
