/* eslint-disable no-useless-escape */
module.exports = {
  plugins: ['import', 'import-helpers'],
  rules: {
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
    ]
  }
};
