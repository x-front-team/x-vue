module.exports = {
  root: true,
  extends: "airbnb-base",
  globals: {
    "AMap": true,
    "window": true,
    "document": true
  },
  parserOptions: {
    // so that 'use strict' is enable
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  // required to lint *.vue files
  plugins: [
    "html"
  ],

  // add your custom rules here
  "rules": {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "import/no-unresolved": [0],
    "import/extensions": [0],
    "semi": [2, "never"],
    "no-plusplus": [0],
    "no-template-curly-in-string": ["off"],
    "one-var-declaration-per-line": [0],
    "space-infix-ops": [0],
    "arrow-parens": [0],
    "strict:": [0],
    "import/no-extraneous-dependencies": [0],
    "no-console": [0],
    "no-underscore-dangle": [0],
    "prefer-const": [0],
    "eol-last": ["off"],
    "no-self-assign": [0],
    "no-param-reassign": [0],
    "no-mixed-operators": [0],
    "no-shadow": [1],
    "arrow-body-style": [0],
    "comma-dangle": [0],
    "one-var": [0],
    "space-before-function-paren": [0],
    "prefer-template": [0],
    "no-new": [0],
    "consistent-return": [0],
    "quote-props": [0],
    "array-bracket-spacing": [0],
    "no-unused-vars": [1],
    "computed-property-spacing": [0],
    "no-use-before-define": [0]
  }
}
