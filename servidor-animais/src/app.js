const express = require('express');
const app = express();

const index = require('./routes/index');
const animais = require('./routes/animaisRouter');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');
    next();
});

app.use('/', index);
app.use('/animais', animais);

module.exports = app;