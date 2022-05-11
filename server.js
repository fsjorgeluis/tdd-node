const express = require('express');
const axios = require('axios');

const { authenticate } = require('./src/middlewares');
const { posts } = require('./src/endpoints');

const app = express();
const port = 4000;

// parse application/x-www-form-urlenconded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

const postsHandlers = posts({ axios });
app.post('/', authenticate, postsHandlers.post);

app.listen(port, () => console.log(`Example app listen on port ${port}!`));
