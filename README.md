# recLogger

The `recLogger` library provides an easy way to log messages to the console with customizable options, including prefixes, timestamps, log levels (e.g., ERROR, INFO, DEBUG), and colored output.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Class: recLogger](#class-reclogger)
   1. [Constructor](#constructor)
   2. [Methods](#methods)
4. [Logging Levels](#logging-levels)
5. [Customization](#customization)
6. [Examples](#examples)

---

## Overview

`recLogger` is a simple and flexible logging library designed for use in Node.js applications. It allows users to log messages with optional metadata such as timestamps, log levels, and customizable colors. The log levels are categorized as `LOG`, `ERROR`, `WARN`, `INFO`, `DEBUG`, and `SUCCESS`.

---

## Installation

To install `recLogger`, you can simply copy the code into your project or use it as a module. Here's how to import and use it in your project.

```bash
npm install recLogger
```

Then, import the library in your Node.js application:

```js
import recLogger from 'recLogger';
```

---

## Class: `recLogger`

The `recLogger` class is the main class in the library, and it provides functionality for logging messages with configurable options.

### Constructor

The constructor accepts an object with the following optional configuration options:

```js
new recLogger({
    prefix = '',
    time = true,
    level = true,
    action = true,
    color = true,
    colors = colorsList
})
```

#### Parameters:
- `prefix` (string, optional): A string that will be prefixed to each log message. Default is an empty string `''`.
- `time` (boolean, optional): Whether to include the timestamp in the log message. Default is `true`.
- `level` (boolean, optional): Whether to include the log level (e.g., `LOG`, `ERROR`, `INFO`). Default is `true`.
- `action` (boolean, optional): Whether to include the action in the log message (e.g., the name of the action). Default is `true`.
- `color` (boolean, optional): Whether to colorize the log messages. Default is `true`.
- `colors` (Object, optional): A dictionary mapping log types (e.g., `LOG`, `ERROR`, `INFO`) to chalk colors. Default is the `colorsList` defined in the code.

### Methods

The `recLogger` class includes several methods for logging messages at different levels.

#### `log(action, text, level, color)`

Logs a message with the specified action, text, level, and color. 

##### Parameters:
- `action` (string): The action to log.
- `text` (string): The text message to log.
- `level` (string): The type of log message (e.g., `LOG`, `ERROR`, `INFO`, etc.).
- `color` (string, optional): The color associated with the log type. If not specified, the default color for the type will be used.

#### `error(action, text)`

Logs an error message with the specified action and text.

##### Parameters:
- `action` (string): The action to log.
- `text` (string): The text message to log.

#### `warn(action, text)`

Logs a warning message with the specified action and text.

##### Parameters:
- `action` (string): The action to log.
- `text` (string): The text message to log.

#### `info(action, text)`

Logs an informational message with the specified action and text.

##### Parameters:
- `action` (string): The action to log.
- `text` (string): The text message to log.

#### `debug(action, text)`

Logs a debug message with the specified action and text.

##### Parameters:
- `action` (string): The action to log.
- `text` (string): The text message to log.

#### `success(action, text)`

Logs a success message with the specified action and text.

##### Parameters:
- `action` (string): The action to log.
- `text` (string): The text message to log.

---

## Logging Levels

`recLogger` defines the following log levels, each associated with a different color:

- `LOG`: General information (default green).
- `ERROR`: Error messages (red).
- `WARN`: Warning messages (yellow).
- `INFO`: Informational messages (cyan).
- `DEBUG`: Debugging messages (light gray).
- `SUCCESS`: Success messages (green).

These log types are used to categorize the messages being logged.

### Color Mapping
By default, the following ANSI color codes are mapped to each log type:

```js
const colorsList = {
    LOG: "green",      // Green
    ERROR: "red",    // Red
    WARN: "yellow",     // Yellow
    INFO: "cyan",     // Cyan
    DEBUG: "gray",    // Light gray
    SUCCESS: "green"   // Green
};
```

---

## Customization

You can customize the behavior of the logger by changing the constructor options.

- To disable colors, set the `color` option to `false` when creating the logger.
- To add a prefix, set the `prefix` option.
- To remove the timestamp, set the `time` option to `false`.
- To remove the log level or action, set the `level` or `action` options to `false`.

### Example of Customizing the Logger

```js
const logger = new recLogger({
    prefix: 'MyApp',
    time: true,
    level: true,
    action: true,
    color: true
});

logger.log('Start', 'Application started', 'INFO');
```

---

## Examples

### Basic Usage

```js
import recLogger from 'recLogger';
const logger = new recLogger();

// Log a general message (LOG level)
logger.log('General Action', 'This is a general log message');

// Log an error message (ERROR level)
logger.error('App Crash', 'An unexpected error occurred');

// Log a warning message (WARN level)
logger.warn('Deprecated Feature', 'This feature is deprecated');

// Log an info message (INFO level)
logger.info('App Initialized', 'Application has been initialized');

// Log a debug message (DEBUG level)
logger.debug('Debugging', 'Checking the application flow');

// Log a success message (SUCCESS level)
logger.success('Task Completed', 'The task was completed successfully');
```

### Customization Example

```js
const logger = new recLogger({
    prefix: 'Server',
    time: true,
    level: false,
    action: true,
    color: false
});

logger.log('Server Started', 'The server has started');
```

In this example, the logger will print messages with the prefix `Server`, without log levels, with timestamps, and without colored output.

---

## Conclusion

The `recLogger` library is a lightweight and customizable logging tool that can be easily integrated into your Node.js applications.