module.exports = {
  extends: ['./lib/share.js'].map(require.resolve),
  plugins: ['react-hooks'],
  rules: {
    // React Hook
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
