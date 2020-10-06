module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript']
    }
  ]
};
