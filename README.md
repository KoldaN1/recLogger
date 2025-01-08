# recLogger - Simple Logger for Node.js

`recLogger` is a lightweight, flexible logging utility designed to provide easy and customizable logging to the console in Node.js. It supports various log levels, dynamic formatting, colorization, and customizable log patterns. This package is ideal for developers who want to improve the visibility of logs and easily manage the output for different logging purposes.

**Warning:** This library uses [chalk](https://www.npmjs.com/package/chalk) for colorizing output. If you are using chalk in your project, you should use the same version in both places to avoid potential conflicts.

## Table of Contents

- [**Installation**](#installation)
- [**Usage**](#usage)
  - [**Import the Logger**](#import-the-logger)
  - [**Create an Instance of the Logger**](#create-an-instance-of-the-logger)
  - [**Log Messages**](#log-messages)
- [**Customization**](#customization)
- [**Example**](#example)
- [**Methods Overview**](#methods-overview)
- [**Example Output**](#example-output)
- [**License**](#license)
- [**Contributing**](#contributing)


---

## Installation

To install the `recLogger` package, use npm:

```bash
npm install recLogger
```

## Usage

### Import the Logger

```javascript
const recLogger = require('recLogger');
```

### Create an Instance of the Logger

You can create an instance of the logger by passing an optional configuration object to the `recLogger` constructor. If no options are provided, the default settings will be used.

```javascript
const logger = new recLogger({
    prefix: 'App',               // Prefix for log messages
    time: true,                  // Include timestamp in logs
    level: true,                 // Include log level in logs
    action: true,                // Include action in logs
    color: true,                 // Enable color for log levels
    bold: true,                  // Enable bold text
    colors: {                    // Custom color mapping for each log level
        LOG: 'green',
        ERROR: 'red',
        WARN: 'yellow',
        INFO: 'cyan',
        DEBUG: 'gray',
        SUCCESS: 'green'
    },
    pattern: '[{prefix}] ({time}) ({level}) >> {action} | {text}' // Custom log message pattern
});
```

### Log Messages

The logger supports several logging methods corresponding to common log levels:

#### 1. `log(action, text, level, color)`

Logs a message with a custom action, message text, log level, and optional color. If no color is provided, the default level color will be used.

```javascript
logger.log('DataProcessing', 'Started processing data', 'INFO', 'cyan');
```

#### 2. `error(action, text)`

Logs an error message in red.

```javascript
logger.error('DatabaseConnection', 'Failed to connect to the database');
```

#### 3. `warn(action, text)`

Logs a warning message in yellow.

```javascript
logger.warn('MemoryUsage', 'Memory usage is high');
```

#### 4. `info(action, text)`

Logs an informational message in cyan.

```javascript
logger.info('FileUpload', 'File upload completed successfully');
```

#### 5. `debug(action, text)`

Logs a debug message in gray.

```javascript
logger.debug('APIRequest', 'Request payload: { id: 1 }');
```

#### 6. `success(action, text)`

Logs a success message in green.

```javascript
logger.success('Authentication', 'User login successful');
```

### Customization

You can customize the behavior of the logger by configuring the following options:

- **prefix** (`string`): Adds a prefix to each log message (default is `'LOG'`).
- **time** (`boolean`): Includes the timestamp in the log message (default is `true`).
- **level** (`boolean`): Includes the log level in the message (default is `true`).
- **action** (`boolean`): Includes the action in the log message (default is `true`).
- **color** (`boolean`): Whether to colorize the log messages (default is `true`).
- **bold** (`boolean`): Whether to use bold text for logs (default is `true`).
- **colors** (`Object`): Custom color mapping for each log level (default colors provided).
- **pattern** (`string`): A string format pattern to customize the structure of log messages. 

Available colors:
    - `black`
    - `red`
    - `green`
    - `yellow`
    - `blue`
    - `magenta`
    - `cyan`
    - `white`
    - `blackBright (alias: gray, grey)`
    - `redBright`
    - `greenBright`
    - `yellowBright`
    - `blueBright`
    - `magentaBright`
    - `cyanBright`
    - `whiteBright`

Available placeholders:
    - `{prefix}` - the prefix of the log.
    - `{time}` - the timestamp of the log.
    - `{level}` - the log level (e.g., LOG, ERROR, INFO).
    - `{action}` - the action being logged.
    - `{text}` - the main log message.

For example, if you wanted a custom log pattern like this:
```
[Prefix] Time: [Time] Level: [Level] - Action: [Action] => Message: [Text]
```

You could set the `pattern` like this:

```javascript
const logger = new recLogger({
    pattern: '[{prefix}] Time: [{time}] Level: [{level})] - Action: [{action}] => Message: [{text}]'
});
```

### Example

```javascript
const recLogger = require('recLogger');
const logger = new recLogger();

logger.log('FileUpload', 'Uploading file to server', 'INFO');
logger.error('ServerError', 'Internal server error occurred');
logger.warn('HighTraffic', 'High traffic detected');
logger.debug('Request', 'GET /api/data');
logger.success('Payment', 'Payment processed successfully');
```

### Methods Overview

- `log(action, text, level, color)` - General logging method for any level.
- `error(action, text)` - Logs an error message.
- `warn(action, text)` - Logs a warning message.
- `info(action, text)` - Logs an informational message.
- `debug(action, text)` - Logs a debug message.
- `success(action, text)` - Logs a success message.

### Example Output

```bash
[App] (10:30:21) (INFO) >> FileUpload | Uploading file to server
[App] (10:30:21) (ERROR) >> ServerError | Internal server error occurred
[App] (10:30:21) (WARN) >> HighTraffic | High traffic detected
[App] (10:30:21) (DEBUG) >> Request | GET /api/data
[App] (10:30:21) (SUCCESS) >> Payment | Payment processed successfully
```

## License

The `recLogger` library is licensed under the MIT License.

---

## Contributing

For more details or contributions, please refer to the [GitHub repository](https://github.com/KoldaN1/recLogger).