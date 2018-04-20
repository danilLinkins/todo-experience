const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: './dist/',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
  proxy: {
    '/api/*': 'http://localhost:8888',
  },
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
