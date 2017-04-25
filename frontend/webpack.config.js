const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname + '/src',
  entry: {
    bundle: './index.jsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0'
  }
};

module.exports = config;
