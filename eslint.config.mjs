import { rules as emotionRules } from '@emotion/eslint-plugin';
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
  ...compat.extends('standard'),
  {
    ignores: ['dist/**/*'],
  },
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          vars: 'all',
        },
      ],
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    ...pluginReactConfig,
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    rules: {
      ...pluginReactConfig.rules,
      'react/require-default-props': [2],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['**/*.styled.{js,mjs,cjs,jsx,mjsx}'],
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
          // skipIfMatch: ['http://[^s]*', '^[-\\w]+/[-\\w\\.]+$'],
          // skipWordIfMatch: ['^foobar.*$'],
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
            'Mui',
            'Slabo',
            'bool',
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
  {
    plugins: {
      '@emotion': {
        rules: emotionRules,
      },
    },
    rules: {
      '@emotion/import-from-emotion': 'error',
      '@emotion/styled-import': 'error',
      '@emotion/syntax-preference': [2, 'string'],
    },
  },
  eslintPluginPrettierRecommended,
];
