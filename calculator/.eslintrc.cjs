module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "mocha"
    ],
    "rules": {
        "indent": [2, 2],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "no-extra-semi": 0,
        "no-empty": 1,
        "no-cond-assign": [2, "always"],
    },
}
