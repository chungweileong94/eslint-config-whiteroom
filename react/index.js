module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-whiteroom-share', './rules/react.js', './rules/typescript.js'].map(
    require.resolve
  )
};
