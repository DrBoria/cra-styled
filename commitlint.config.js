const { readdirSync } = require('fs');

const readSubDirs = (dir) => readdirSync(dir).filter((it) => !it.includes('.'));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 110],
    'type-case': [2, 'always', ['lower-case']],
    'type-enum': [2, 'always', ['feature', 'bugfix', 'refactor', 'test', 'revert']],
    'scope-enum': [
      2,
      'always',
      [
        'ci',
        'commitlint',
        'package',
        ...readSubDirs('src'),
        ...readSubDirs('src/components'),
        ...readSubDirs('src/sections'),
        ...readSubDirs('src/styles'),
      ],
    ],
  },
};
