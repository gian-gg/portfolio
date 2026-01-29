// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**', '*.config.js'],
  },
  {
    rules: {
      // Add your custom rules here
    },
  }
);
