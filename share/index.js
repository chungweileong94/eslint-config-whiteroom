module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
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
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint']
    }
  ],
  extends: ['./rules/import.js', './rules/typescript.js', './rules/index.js', 'eslint-config-prettier'].map(
    require.resolve
  ),
  rules: {
    'prettier/prettier': 'error'
  }
};
