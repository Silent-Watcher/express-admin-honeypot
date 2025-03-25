import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/*'],
	format: ['esm', 'cjs'], // Keep ESM format
	outDir: 'dist',
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: true,
	minify: true,
});
