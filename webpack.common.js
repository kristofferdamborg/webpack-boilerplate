const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, 'dist');

module.exports = {
  entry: [
    Path.resolve(__dirname, 'polyfills'),
    Path.resolve(__dirname, 'src/js/index')
  ],
  output: {
    path: dest,
    filename: 'js/bundle.[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin([dest]),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, 'static'), to: 'static' }
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
};
