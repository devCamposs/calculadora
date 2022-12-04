const createError = require('http-errors');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

//routes
const calculadoraRouter = require('./routes/calculadora')

app.use('/calculadora', calculadoraRouter)

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(3000, () => console.log('rodando na porta 3000'))

module.exports = app
