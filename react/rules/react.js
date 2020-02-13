module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        'react/jsx-filename-extension': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off'
    }
};
