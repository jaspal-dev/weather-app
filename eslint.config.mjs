import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import perfectionist from 'eslint-plugin-perfectionist';
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
    ignores: ['dist/**/*', 'eslint.config.mjs'],
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
      perfectionist,
    },
    rules: {
      'perfectionist/sort-array-includes': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          'spread-last': true,
        },
      ],
      'perfectionist/sort-classes': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'index-signature',
            'static-property',
            'private-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            'method',
          ],
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            'react',
            'nanostores',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          'custom-groups': {
            value: {
              react: ['react', 'react-*'],
              nanostores: '@nanostores/**',
            },
            type: {
              react: 'react',
            },
          },
          'newlines-between': 'always',
          'internal-pattern': [
            '@/components/**',
            '@/stores/**',
            '@/pages/**',
            '@/lib/**',
          ],
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: ['multiline', 'unknown', 'shorthand'],
        },
      ],
      'perfectionist/sort-maps': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          'partition-by-comment': 'Part:**',
          groups: ['id', 'unknown'],
          'custom-groups': {
            id: 'id',
          },
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
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
            'webpack',
            'contenthash',
            'jsx',
          ],
          strings: true,
          templates: true,
        },
      ],
    },
  },
];
