module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    '@sanv/eslint-config-unicorn-typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-module': {},
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React features
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,

    // Declarations
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-underscore-dangle': 'error',
    'no-var': 'error',
    'prefer-const': ['error'],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkProperties: true,
        ignore: [/Props/],
        allowList: {
          props: true,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variableLike', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'variable', modifiers: ['destructured'], format: ['camelCase'] },
      { selector: 'variable', modifiers: ['global'], format: ['camelCase', 'PascalCase'] },
      // React Components should be in PascalCase
      {
        selector: 'variable',
        modifiers: ['global'],
        types: ['function'],
        filter: {
          // you can expand this regex to add more allowed prefixes
          regex: '^(is|should|toggle|set|get|show|hide|fetch)',
          match: false,
        },
        format: ['PascalCase'],
      },
      // Other functions should be in camelCase
      { selector: 'function', modifiers: ['global'], format: ['camelCase'] },
      {
        selector: 'typeLike',
        prefix: ['T'],
        filter: {
          // you can expand this regex to add more allowed names
          regex: '^(Response|Error|Promise|P|T|Body)$',
          match: false,
        },
        format: ['PascalCase'],
      },
    ],

    // Spaces & Delimeters
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-tabs': 'error',
    'key-spacing': ['error', { align: 'value' }],

    // Imports
    'import/prefer-default-export': 0,
    'import/no-unresolved': ['error'],
    'import/named': 0, // Cause of styled-components theme declaration in baseTheme.ts
    'unicorn/prefer-export-from': 0, // Conflict with types export

    // Other
    eqeqeq: ['error', 'smart'],
    'no-eval': 'error',
    'no-unsafe-finally': 'error',
    complexity: ['error', 6],
    'unicorn/no-new-array': 0,
  },
};
