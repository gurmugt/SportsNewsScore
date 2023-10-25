module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard', // Remove the "standard-with-typescript" extension
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2021, // Use a specific ECMAScript version
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // You can add or adjust ESLint rules as needed
  }
}
