module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-whiteroom-share', './rules/react.js'].map(require.resolve)
};
