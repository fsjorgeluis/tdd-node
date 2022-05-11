const express = require('express');

const services = require('./src/services');
const { authenticate } = require('./src/middlewares');
const { posts } = require('./src/endpoints');

const app = express();
const port = 4000;

// parse application/x-www-form-urlenconded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

const postsHandlers = posts(services);

app.post('/', authenticate, postsHandlers.post);

app.listen(port, () => console.log(`Example app listen on port ${port}!`));

module.exports = app;
