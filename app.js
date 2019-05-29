
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var authenticate = require('./routes/authentication');


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://manhnt1712:manhkham2911@cluster0-dvrdh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
var indexRouter = require('./routes/index');
var routeMember = require('./routes/routeMember');
var routeJob = require('./routes/routeJob');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'nodejs',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authenticate);
app.use('/', indexRouter);
app.use('/members', routeMember);
app.use('/jobs', routeJob);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var port = 8866;

app.listen(port, function () {
  console.log('Server started at ' + port)} );