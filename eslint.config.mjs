import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import perfectionistAlphabetical from 'eslint-plugin-perfectionist/configs/recommended-alphabetical';
import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
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
          strings: true,
          templates: true,
        },
      ],
    },
  },
  perfectionistAlphabetical,
  perfectionistLineLength,
  perfectionistNatural,
  eslintPluginPrettierRecommended,
];
