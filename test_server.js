/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.js");

config.entry = [
  'webpack-dev-server/client?http://localhost:5000',
  'webpack/hot/dev-server',
  './src/tests/index.tsx'
];

config.output.filename = "tests/bundle.js";

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: "./src"
  }
).listen(5000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:5000');
  });
