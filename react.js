module.exports = {
  extends: ['eslint-config-airbnb-typescript', './lib/share.js'].map(require.resolve),
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',

    // React Hook
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
