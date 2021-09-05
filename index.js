module.exports = {
  extends: ['eslint-config-airbnb-typescript/base', './lib/share.js'].map(require.resolve)
};
