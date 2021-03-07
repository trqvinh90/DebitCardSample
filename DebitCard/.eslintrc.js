module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  settings: {
    'import/resolver': { 'babel-module': {} },
  },
  plugins: [
    'react', 'react-hooks',
  ],
};
