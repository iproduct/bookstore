const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cookieSession = require('cookie-session');
const cors = require('cors');

const indexRouter = require('./routes/index');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const authenticationRoutes = require('./routes/authentication');

const { UNAUTHORIZED } = require('http-status-codes');

const app = express();

const NOT_LOGGED_IN = 'You are not logged in';

app.use(cors({
  credentials: true,
  origin: true
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  expires: new Date(Date.now() + 3600000),
  cookie: {
    expires: new Date(Date.now() + 3600000),
    secure: false,
    httpOnly: false
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/*', (err, req, res, next) => {
  if (!req.session.userId) {
    return res.status(UNAUTHORIZED).json({ status: UNAUTHORIZED, message: NOT_LOGGED_IN});
  }
  next();
});

// routes
app.use('/', indexRouter);
app.use('/authentication', authenticationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.toString() });
});

module.exports = app;
