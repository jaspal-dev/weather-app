import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import spellcheck from 'eslint-plugin-spellcheck';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['dist/**/*'],
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  {
    plugins: {
      'sort-keys': sortKeys,
    },
    rules: {
      'sort-keys': 0,
      'sort-keys/sort-keys-fix': 1,
    },
  },
  ...compat.extends('standard'),
  {
    ...pluginReactConfig,
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettierRecommended,
  {
    plugins: {
      spellcheck,
    },
    rules: {
      'spellcheck/spell-checker': [
        1,
        {
          comments: true,
          identifiers: true,
          lang: 'en_US',
          minLength: 3,
          skipIfMatch: ['http://[^s]*', '^[-\\w]+/[-\\w\\.]+$'],
          skipWordIfMatch: ['^foobar.*$'],
          skipWords: [
            'dict',
            'aff',
            'hunspellchecker',
            'hunspell',
            'utils',
            'lang',
            'compat',
            'mjs',
            'cjs',
            'jsx',
            'mjsx',
            'globals',
          ],
          strings: true,
          templates: true,
        },
      ],
    },
  },
];
