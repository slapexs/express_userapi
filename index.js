const express = require('express');
const app = express();
const port = 8000;
const hbs = require('hbs');

// Router
const routerUser = require('./routers/user');

// Extension express
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

// Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
app.get('/', (request, response) => {
  response.render('home');
});

// User api
app.use('/users', routerUser);
