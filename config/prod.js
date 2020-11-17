/** @format */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, '/../src');
const _publicPath = '/privateProject/';

const config = {
  mode: 'production',
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/[name]-[hash].js',
    publicPath: _publicPath,
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
    },
  },
};

module.exports = config;
