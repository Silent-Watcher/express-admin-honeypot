# express-admin-honeypot 🍯🐝

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A lightweight Express middleware that protects your admin routes by serving a decoy (honeypot) page. Intrusion attempts are logged using your preferred logging library (Winston, Pino, etc.) and can either redirect attackers to a fake URL or display a default customizable HTML template.

## Table of Contents

- [express-admin-honeypot 🍯🐝](#express-admin-honeypot-)
	- [Table of Contents](#table-of-contents)
	- [Features](#features)
	- [Installation](#installation)
	- [Usage](#usage)
		- [Basic Usage](#basic-usage)
		- [Redirecting to a Fake URL](#redirecting-to-a-fake-url)
		- [Custom Fake Admin Page](#custom-fake-admin-page)
	- [Logger Integration](#logger-integration)
		- [Using Pino](#using-pino)
		- [using winston](#using-winston)
	- [Configuration](#configuration)
	- [Issues and Contributing](#issues-and-contributing)
	- [License](#license)
	- [Contact](#contact)

## Features

- **Express-only Middleware:** Designed specifically for Express applications.
- **Configurable Path:** Protects a configurable admin route (default: `/admin`).
- **Intrusion Logging:** Logs IP address and User-Agent for each access attempt.
- **Flexible Response:**
  - Redirects to a configurable fake URL.
  - Or serves a default (or custom) fake admin HTML page.
- **Custom Logger Support:** Easily integrate your favorite logging libraries like Pino or Winston.
- **Simple & Lightweight:** Minimal setup with an easy-to-extend codebase.

## Installation

Install the package via NPM:

```bash
npm install node-admin-honeypot
```

## Usage

### Basic Usage

Import and use the middleware in your Express application. By default, it will protect the `/admin` path and serve a built-in fake admin page.

```ts
import express from 'express';
import honeypot from 'node-admin-honeypot';

const app = express();

app.use(honeypot());

app.get('/', (req, res) => {
  res.send('Welcome to the real app!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Redirecting to a Fake URL

To redirect attackers to a custom decoy URL instead of serving the default fake admin page, configure the `fakeAdminUrl` option.

```ts
app.use(honeypot({
  path: '/admin', // Optional: default is '/admin'
  fakeAdminUrl: '/decoy-admin',
}));

app.get('/decoy-admin', (req, res) => {
  res.send('<h1>Fake Admin</h1><p>This is a decoy page.</p>');
});
```

### Custom Fake Admin Page

If you want to display a custom HTML page, use the `customHtml` option.

```ts
app.use(honeypot({
  customHtml: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Unauthorized Access</title>
      </head>
      <body>
        <h1>Access Denied</h1>
        <p>Your attempt has been logged.</p>
      </body>
    </html>
  `,
}));
```

## Logger Integration

The middleware allows you to integrate with any logger that has warn, info, or error methods. Below are examples using both Pino and Winston.

### Using Pino

```ts
import pino from 'pino';
const logger = pino({ level: 'warn' });

app.use(honeypot({
  logger,
}));
```

### using winston

```ts
import winston from 'winston';

const logger = winston.createLogger({
  level: 'warn',
  transports: [
    new winston.transports.Console(),
  ],
});

app.use(honeypot({
  logger,
}));
```

## Configuration

| Option                     | Type                                      | Remarks                                                                                         |
| -------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `path`                 | `string`                                  | The admin path to protect. Default is "/admin"                                              |
|  `fakeAdminUrl`                   | `string`                     | A URL to redirect attackers to (optional).                                                                   |
|  `customHtml`                 | `string`          | A custom HTML page to display instead of redirecting (optional).                                                 |
|  `logger`              | `function`                                  | Logger instance (supports Winston, Pino, or any logger with `.info`, `.warn`, or `.error` methods).
|  `eventEmitter`              | `EventEmitter`                                  | An event emitter instance for handling honeypot-related events.

## Issues and Contributing

If you encounter a bug or want to see something added/changed, please go ahead and open an [issue](https://github.com/Silent-Watcher/express-admin-honeypot/issues)
! If you need help with something, feel free to start a [discussion](https://github.com/Silent-Watcher/express-admin-honeypot/discussions/new)!

## License

This project is licensed under the MIT License.

## Contact

For support or any questions, please open an issue in the GitHub repository or contact <backendwithali@gmail.com>.
