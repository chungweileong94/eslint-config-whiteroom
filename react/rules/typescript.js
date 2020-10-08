module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
};
