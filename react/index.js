/* eslint-disable */
module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "airbnb"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "babel-eslint",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "react-hooks",
        "import-helpers"
    ],
    rules: {
        "react/jsx-indent": "off",
        "react/jsx-filename-extension": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "import/prefer-default-export": "off",
        "import/newline-after-import": [
            "warn",
            {
                "count": 2
            }
        ],
        "import-helpers/order-imports": [
            "warn",
            {
                "newlinesBetween": "always",
                "groups": [
                    "module",
                    "/^@\//",
                    "parent",
                    "sibling",
                    "index"
                ]
            }
        ],
        "indent": "off",
        "no-nested-ternary": "off",
        "no-restricted-syntax": "off",
        "no-await-in-loop": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "no-unused-expressions": "off",
        "radix": "off",
        "no-plusplus": "off",
        "max-len": "off",
        "func-names": "off",
        "arrow-parens": [
            "warn",
            "as-needed"
        ]
    }
};
