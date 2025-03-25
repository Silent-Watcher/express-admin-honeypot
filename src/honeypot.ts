import type { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import { DEFAULT_FAKE_ADMIN_HTML } from './template';
import type { HoneypotOptions } from './types';

/**
 * Default logger using console.warn
 * Logs intrusion attempts if no custom logger is provided.
 */
const defaultLogger = {
	/**
	 * Logs a warning message.
	 * @param {string} message - The warning message to log.
	 */
	warn: (message: string) => console.warn(`[Honeypot] ${message}`),
};

/**
 * Express middleware to create a honeypot for attackers targeting admin routes.
 *
 * @param {HoneypotOptions} [options] - Configuration options for the honeypot.
 * @param {string} [options.path="/admin"] - The admin path to protect.
 * @param {string} [options.fakeAdminUrl] - A URL to redirect attackers to (if provided).
 * @param {string} [options.customHtml] - A custom HTML page to serve instead of redirecting.
 * @param {object} [options.logger] - A logger instance supporting `warn` (e.g., Winston, Pino).
 * @param {EventEmitter} [options.eventEmitter] - An optional event emitter to handle honeypot events.
 * @returns {Function} Express middleware function.
 */
export function honeypot(options: HoneypotOptions = {}) {
	const {
		path = '/admin',
		fakeAdminUrl,
		customHtml,
		logger = defaultLogger,
		eventEmitter,
	} = options;

	// Return an Express Router to avoid path issues
	const router = Router();

	router.use(path, (req: Request, res: Response, next: NextFunction) => {
		const ip = req.ip || req.connection.remoteAddress;
		const userAgent = req.headers['user-agent'] || 'unknown';

		if (logger.warn) {
			logger.warn(
				`Intrusion attempt detected! IP: ${ip}, User-Agent: ${userAgent}`,
			);
		}

		if (fakeAdminUrl) {
			return res.redirect(fakeAdminUrl);
		}

		if (eventEmitter) {
			eventEmitter.emit('honeypotHit', { ip: req.ip, userAgent });
		}

		if (customHtml) {
			return res.sendFile(customHtml);
		}

		res.send(DEFAULT_FAKE_ADMIN_HTML);
	});

	return router;
}
