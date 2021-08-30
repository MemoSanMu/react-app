module.exports = {
  plugins: [
    ['import', { libraryName: 'antd-mobile', style: 'css' }], // `style: true` 会加载 less 文件
    // '@emotion',
  ],
  // '@babel/preset-react', '@babel/preset-env'
  presets: ['react-app'],
};
