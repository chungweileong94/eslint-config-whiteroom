module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'import-helpers'],
  rules: {
    'no-shadow': 'error',

    // Typescript
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/consistent-type-imports': ['warn', {prefer: 'type-imports', fixStyle: 'inline-type-imports'}],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_'}
    ],
    '@typescript-eslint/no-misused-promises': ['error', {checksVoidReturn: false}],

    // Import related
    'import/newline-after-import': ['warn', {count: 1}],
    'import-helpers/order-imports': [
      'warn',
      {newlinesBetween: 'always', groups: ['module', '/^~//', '/^@//', 'parent', 'sibling', 'index']}
    ]
  }
};
