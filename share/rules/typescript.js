module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error'
      }
    }
  ]
};
