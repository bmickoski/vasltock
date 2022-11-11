/**
 * Utility that makes logging easy and cleaner
 */
const { createLogger, format, transports } = require("winston");
const { printf } = format;

const chalk = require("chalk");
const dateformat = require("dateformat");

const DATE_FORMAT = "HH:MM:ss.l";

const logFormat = printf(({ level, message, label, timestamp }) => {
  return message;
});

const logger = createLogger({
  transports: [new transports.Console()],
  format: logFormat,
});

if (!chalk.supportsColor) {
  chalk.Level = 0;
}

module.exports = {
  debug: (msg) => {
    logger.debug(formatMsg("DEBUG", msg));
  },

  info: (msg) => {
    logger.info(formatMsg("INFO", msg));
  },

  warn: (msg) => {
    logger.warn(formatMsg("WARN", msg));
  },

  error: (msg) => {
    logger.error(formatMsg("ERROR", msg));
  },

  header: (msg) => {
    logger.info(
      chalk.green("=================================================")
    );
    logger.info(` ${msg}`);
    logger.info(
      chalk.green("=================================================")
    );
  },
};

function formatMsg(level, msg) {
  const timestamp = dateformat(Date.now(), DATE_FORMAT);

  switch (level) {
    case "INFO":
      level = chalk.cyan(level);
      break;

    case "WARN":
      level = chalk.yellow(level);
      break;

    case "ERROR":
      level = chalk.red(level);
      break;

    default:
      break;
  }

  return `[${timestamp}][${level}] ${msg}`;
}
