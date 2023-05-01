const tsConfig = require('./tsconfig.json')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  ignorePatterns: tsConfig.exclude,
  overrides: [
    {
      files: ['**/*.{ts,tsx,js,jsx}']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
  }
}
