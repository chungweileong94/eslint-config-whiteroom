module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['./rules/import.js', './rules/index.js'].map(require.resolve),
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
