/**
 * recLogger
 * Simple logger for Node.js
 * Copyright (c) 2025, KoldaN and contributors (MIT License).
 * https://github.com/KoldaN1/recLogger
 **/

import chalk from 'chalk';
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
     * Initializes a new recLogger instance
     * @param {Object} [options] - the options to use for this logger
     * @param {string} [options.prefix] - the prefix to use for this logger
     * @param {boolean} [options.time=true] - whether to include the time in the log message
     * @param {boolean} [options.level=true] - whether to include the level in the log message
     * @param {boolean} [options.action=true] - whether to include the action in the log message
     * @param {boolean} [options.color=true] - whether to include the color in the log message
     */
    constructor({
        prefix = '',
        time = true,
        level = true,
        action = true,
        color = true,
        colors = colorsList
    }) {
        this.prefix = prefix;
        this.time = time;
        this.level = level;
        this.action = action;
        this.color = color;
        this.colors = colorsList;
    
    };

    /**
     * Logs a message to the console with the specified prefix, time, level, action, and color
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     * @param {string} level - the level of log message (e.g. LOG, ERROR, WARN, INFO, DEBUG, SUCCESS)
     * @param {string} [color] - the color to use for the log message (e.g. LOG, ERROR, WARN, INFO, DEBUG, SUCCESS)
     */
    log(...args) {
        let str = '';
        const colorType = args[3] || this.colors.LOG;
        const useColor = this.color && colorType;

        if (this.prefix) str += `[${this.prefix}] `;
        if (this.time) str += `(${new Date().toLocaleTimeString()}) `;
        if (this.level && args[2]) str += `(${args[2]}) `;
        str += `>> `;
        if (this.action && args[0]) str += `${args[0]} | `;
        str += args[1];
        if (useColor) console.log(chalk.bold[colorType](str));
        else console.log(str);
    }

    
    /**
     * Logs an error message to the console with the specified action and text
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     */
    error(action, text) {
        this.log(action, text, 'ERROR', 'ERROR');
    }
    
     /**
     * Logs an error message to the console with the specified action and text
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     */
    warn(action, text) {
        this.log(action, text, 'WARN', 'WARN');
    }

     /**
     * Logs an error message to the console with the specified action and text
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     */
    info(action, text) {
        this.log(action, text, 'INFO', 'INFO');
    }

     /**
     * Logs an error message to the console with the specified action and text
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     */
    debug(action, text) {
        this.log(action, text, 'DEBUG', 'DEBUG');
    }

     /**
     * Logs an error message to the console with the specified action and text
     * @param {string} action - the action to log
     * @param {string} text - the text to log
     */
    success(action, text) {
        this.log(action, text, 'SUCCESS', 'SUCCESS');
    }
}

module.exports = recLogger;