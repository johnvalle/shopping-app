module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript"],
  parserOptions: {
    "project": "./tsconfig.json"
  },
  rules: {
    // Allow nested ternary operators for cleaner approach
    "no-nested-ternary": "off",

    // typescript-eslint overrides
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/quotes": "off",

    // For constants
    "camelcase": "off",

    // Controlled with prettier
    "arrow-parens": "off",
    "function-paren-newline": "off",
    "react/jsx-curly-newline": "off",

    // Unnecessary
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": [2, { "props": false }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
};
