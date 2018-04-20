/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server,
 * which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintrcPath = path.resolve(__dirname, '.eslintrc');

module.exports = {
  entry: [
    './src/app',
    'webpack/hot/dev-server',
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  stats: {
    colors: true,
    reasons: true,
  },
  resolve: {
    root: ['node_modules'],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
    }, {
      test: /\.scss/,
      loader: 'style!css!sass',
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEVTOOLS__: true,
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.template.html',
    }),
  ],
  eslint: {
    configFile: eslintrcPath,
  },
};
