module.exports = {
    extends: [
        "airbnb-base"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    plugins: [
        "import-helpers",
        "import"
    ],
    rules: {
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
