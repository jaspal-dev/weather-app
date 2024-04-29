import perfectionistAlphabetical from 'eslint-plugin-perfectionist/configs/recommended-alphabetical';
import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import spellcheck from 'eslint-plugin-spellcheck';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import pluginJs from '@eslint/js';
import globals from 'globals';
import path from 'path';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  recommendedConfig: pluginJs.configs.recommended,
  baseDirectory: __dirname,
});

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['dist/**/*'],
  },
  ...compat.extends('standard'),
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
  },
  {
    rules: {
      'spellcheck/spell-checker': [
        1,
        {
          skipWords: [
            'dict',
            'aff',
            'hunspellchecker',
            'hunspell',
            'utils',
            'webpack',
            'contenthash',
            'jsx',
            'lang',
            'mjs',
            'cjs',
            'mjsx',
            'compat',
            'Compat',
            'globals',
          ],
          skipIfMatch: ['http://[^s]*', '^[-\\w]+/[-\\w\\.]+$'],
          skipWordIfMatch: ['^foobar.*$'],
          identifiers: true,
          templates: true,
          comments: true,
          lang: 'en_US',
          strings: true,
          minLength: 3,
        },
      ],
    },
    plugins: {
      spellcheck,
    },
  },
  perfectionistAlphabetical,
  perfectionistNatural,
  perfectionistLineLength,
  eslintPluginPrettierRecommended,
];
