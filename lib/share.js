module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'import', 'import-helpers'],
  rules: {
    // General
    'object-curly-spacing': ['error', 'never'],
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-unused-expressions': 'off',
    radix: 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'arrow-parens': ['warn', 'always'],

    // Typescript
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Import related
    'import/prefer-default-export': 'off',
    'import/newline-after-import': [
      'warn',
      {
        count: 1
      }
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@//', 'parent', 'sibling', 'index']
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    // Prettier
    'prettier/prettier': 'warn'
  }
};
