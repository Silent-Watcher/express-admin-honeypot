import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['tests/**/*.spec.ts', 'tests/**/*.test.ts'],
		coverage: {
			provider: 'istanbul',
			enabled: true,
			reporter: ['html', 'json', 'text'],
			all: true,
			include: ['src/**/*.ts'],
		},
		environment: 'node',
	},
});
