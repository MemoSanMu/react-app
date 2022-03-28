module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
      },
    ],
  ],
  // '@babel/preset-react', '@babel/preset-env'
  presets: [
    'react-app',
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '49',
          ios: '10',
        },
      },
    ],
  ],
};
