const express = require('express');
const app = express();

const index = require('./route/index');
const livros = require('./route/livrosRouter');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');
    next();
});

app.use('/', index);
app.use('/livros', livros);

module.exports = app;