module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import', 'import-helpers'],
  rules: {
    'no-shadow': 'error',

    // Typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_'},
    ],

    // Import related
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^~//', '/^@//', 'parent', 'sibling', 'index'],
      },
    ],

    // Prettier
    'prettier/prettier': 'warn',
  },
};
