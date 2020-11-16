/** @format */

module.exports = {
  presents: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    ['import', { libraryName: 'antd-mobile', style: true }],
  ],
};