module.exports = {
    extends: "airbnb-base",
    plugins: [
        "eslint-plugin-import-helpers",
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
