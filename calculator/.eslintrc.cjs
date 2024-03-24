module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'mocha': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'mocha'
  ],
  'rules': {
    'indent': [2, 2],
    'semi': [2, 'always'],
    'no-extra-semi': 0,
    'no-empty': 1,
    'no-cond-assign': [2, 'always'],
    camelcase: 1,
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
          'info',
        ],
      },
    ],
    'no-unused-vars': 1,
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
  },
};
