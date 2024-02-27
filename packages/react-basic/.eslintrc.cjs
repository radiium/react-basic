module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "react-refresh"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            {
                allowConstantExport: true,
                allowExportNames: ["useThemeContext, Loading"]
            }
        ]
    },
    ignorePatterns: [
        "dist",
        ".eslintrc.cjs"
    ]
}