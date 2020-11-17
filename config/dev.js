/** @format */

const path = require('path');
const webpack = require('webpack');

const srcPath = path.join(__dirname, '/../src');
const _publicPath = '/privateProject/';

const config = {
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'app.js',
    publicPath: _publicPath,
  },
  cache: true,
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './src/',
    publicPath: _publicPath,
    historyApiFallback: true,
    port: 8002,
    hot: true,
    host: 'localhost',
    proxy: {
      '/app/*': {
        target: 'http://112.13.96.207:13919',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
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
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.js'],
    alias: {
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
    },
  },
};

module.exports = config;
