/**
 * recLogger
 * Simple logger for Node.js
 * Copyright (c) 2025, KoldaN and contributors (MIT License).
 * https://github.com/KoldaN1/recLogger
 **/

const chalk = require('chalk');
const colorsList = {
    LOG: 'green',      // Green
    ERROR: 'red',    // Red
    WARN: 'yellow',     // Yellow
    INFO: 'cyan',     // Cyan
    DEBUG: 'gray',    // Light gray
    SUCCESS: 'green'   // Green
};

class recLogger {

    /**
     * Constructs a new instance of the recLogger class with the specified options.
     * 
     * @param {Object} options - Configuration options for the logger.
     * @param {string} [options.prefix=''] - A string to prefix each log message.
     * @param {boolean} [options.time=true] - Whether to include a timestamp in the log message.
     * @param {boolean} [options.level=true] - Whether to include the log level in the log message.
     * @param {boolean} [options.action=true] - Whether to include the action in the log message.
     * @param {boolean} [options.color=true] - Whether to colorize the log messages.
     * @param {boolean} [options.bold=true] - Whether to use bold text in the log messages.
     * @param {Object} [options.colors=colorsList] - A mapping of log levels to colors. Colors: black, red, green, yellow, blue, magenta, cyan, white, blackBright (alias: gray, grey), redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright
     * @param {string} [options.pattern='[{prefix}] ({time}) ({level}) >> {action} | {text}'] - The pattern for formatting log messages.
     */
    constructor({
        prefix = 'LOG',
        time = true,
        level = true,
        action = true,
        color = true,
        bold = true,
        colors = colorsList,
        pattern = '[{prefix}] ({time}) ({level}) >> {action} | {text}'
    }) {
        this.prefix = prefix;
        this.time = time;
        this.level = level;
        this.action = action;
        this.color = color;
        this.bold = bold;
        this.colors = colors;
        this.pattern = pattern;

    };

    /**
     * Logs a message to the console with the specified prefix, time, level, action, and color
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     * @param {string} level - the level of log message (e.g. LOG, ERROR, WARN, INFO, DEBUG, SUCCESS)
     * @param {string} [color] - the color to use for the log message (e.g. LOG, ERROR, WARN, INFO, DEBUG, SUCCESS)
     */
    log(...args) {
        try {
            let str = this.pattern;
            const colorType = args[3] || this.colors.LOG;
            const useColor = this.color && colorType;

            let chalkf = chalk;
            if (this.bold) chalkf = chalkf.bold;
            if (useColor) chalkf = chalkf[colorType];

            if (this.prefix && str.includes('{prefix}')) str = str.replaceAll('{prefix}', this.prefix);
            if (this.time && str.includes('{time}')) str = str.replaceAll('{time}', new Date().toLocaleTimeString());
            if (this.level && args[2] && str.includes('{level}')) str = str.replaceAll('{level}', args[2]);
            if (this.action && args[0] && str.includes('{action}') && args.length > 1) str = str.replaceAll('{action}', args[0]);
            if (args.length == 1 && str.includes('{text}')) {
                str = str.replaceAll('{text}', args[0]);
            } else if (args.length > 1 && str.includes('{text}')) {
                str = str.replaceAll('{text}', args[1]);
            }

            console.log(chalkf(str));
        } catch (error) {
            console.log(error);
            return;
        }
    }


    /**
     * Logs an error message to the console with the specified action and text
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     */
    error(action, text) {
        this.log(action, text, 'ERROR', this.colors.ERROR);
    }

    /**
    * Logs an error message to the console with the specified action and text
    * @param {string} action - the action to log
    * @param {string} text - the text to log
    */
    warn(action, text) {
        this.log(action, text, 'WARN', this.colors.WARN);
    }

    /**
    * Logs an error message to the console with the specified action and text
    * @param {string} action - the action to log
    * @param {string} text - the text to log
    */
    info(action, text) {
        this.log(action, text, 'INFO', this.colors.INFO);
    }

    /**
    * Logs an error message to the console with the specified action and text
    * @param {string} action - the action to log
    * @param {string} text - the text to log
    */
    debug(action, text) {
        this.log(action, text, 'DEBUG', this.colors.DEBUG);
    }

    /**
    * Logs an error message to the console with the specified action and text
    * @param {string} action - the action to log
    * @param {string} text - the text to log
    */
    success(action, text) {
        this.log(action, text, 'SUCCESS', this.colors.SUCCESS);
    }
}

module.exports = recLogger;