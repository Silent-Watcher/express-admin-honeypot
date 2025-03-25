import type EventEmitter from 'node:events';

/**
 * Options for configuring the honeypot middleware.
 */
export interface HoneypotOptions {
	/**
	 * The admin path to protect. Default is "/admin"
	 * @default "/admin"
	 */
	path?: string;

	/**
	 * A URL to redirect attackers to (optional).
	 */
	fakeAdminUrl?: string;

	/**
	 * A custom HTML page to display instead of redirecting (optional).
	 */
	customHtml?: string;

	/**
	 * Logger instance (supports Winston, Pino, or any logger with `.info`, `.warn`, or `.error` methods).
	 * Default logs to `console.warn()`.
	 */
	logger?: {
		/** Logs informational messages. */
		info?: (msg: string) => void;
		/** Logs warning messages. */
		warn?: (msg: string) => void;
		/** Logs error messages. */
		error?: (msg: string) => void;
	};

	/**
	 * An event emitter instance for handling honeypot-related events.
	 */
	eventEmitter?: EventEmitter;
}
