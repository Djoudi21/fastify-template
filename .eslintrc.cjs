module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    extends: ['standard', 'plugin:@typescript-eslint/recommended', "eslint-config-prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        "no-console": "warn",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error"
    },
};
