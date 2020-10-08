module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        'react/prop-types': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/issues/2502
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error'
      }
    }
  ]
};
