var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/index.tsx'
  ],
  output: {
    path: __dirname + "/src",
    filename: 'bundle.js',
    publicPath: '/'
  },
  node: {
    fs: "empty",
    dns: "empty",
    net: "empty"
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', 'scss', ".js", ".jsx", ],
    moduleDirectories: ["web_modules", "node_modules"],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.tsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          "babel?cacheDirectory=karmaCache/JS",
          "ts-loader"
          // awesome typescript doesn't seem to handle the specific config option.
          // "awesome-typescript-loader?cacheDirectory=karmaCache/TS&useBabel=true&forkChecker=true"
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
