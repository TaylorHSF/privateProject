/** @format */

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  // presets: ['env', 'react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    ['import', { libraryName: 'antd-mobile', style: true }],
  ],
};
