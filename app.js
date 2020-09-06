var createError = require('http-errors');
var express = require('express');
var helmet = require('helmet');
var compression = require('compression');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(compression());
app.use(helmet());

// session setup
app.use(session({
  name: 'session-ID', //prevents fingerprinting our server so that the attacker will not know that backend is powered by express
  secret: config.secretKey, // used to sign session cookie
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true, // session is stored only over HTTPS
    httpOnly: true, // session is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
    domain: 'localhost', // your app's domain in production
    maxAge: config.jwtExpiryInSec * 1000 // sets expiry time
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
