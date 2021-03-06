module.exports = {
  extends: ['react-app'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 1,
    quotes: [1, 'single'],
    'max-len': [1, 80],
    'no-fallthrough': [0],
  },
  env: {
    es6: true,
    browser: true,
  },
};
