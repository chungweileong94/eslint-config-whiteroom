module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/prop-types': 'off'
      }
    }
  ]
};
