const path = require('path');
const split = require('split');
const util = require('util');

const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;
require('winston-daily-rotate-file');

const outputFormat = printf(info => {
  if (typeof info.message == 'object') {
    info.message = JSON.stringify(info.message);
  } else {
    info.message = util.format(info.message);
  }
  if (info instanceof Error) {
    return `${info.timestamp} [${info.level}]: \n${
      info.message
    } \n${util.format(info.stack)}`;
  }
  return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const transport = new transports.DailyRotateFile({
  filename: path.join(__dirname, '..', 'logs', 'tools.blur-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '50m',
  maxFiles: '30d'
});

const logger = createLogger({
  format: combine(timestamp(), outputFormat),
  transports: [transport, new transports.Console()]
});

logger.stream = split().on('data', function(message) {
  logger.info(message);
});

module.exports = logger;
