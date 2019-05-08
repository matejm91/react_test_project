require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const logger = require('./config/winston');
const morgan = require('morgan');

const indexRouter = require('./routes/index.js');

const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use(morgan('dev', { stream: logger.stream }));

app.use('/', indexRouter);

/**
 * old backend left here just for reference
 *
 * used as a function that is called here which is sending urls
 * and is routed in /routes/index.js
 *
 * USEFULL
 */
// indexRouter(app);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (err.status != 404) {
    logger.error(err);
  }
  const status = err.status || 500;
  res.status(status);
  res.render('error', { status });
});

module.exports = app;
