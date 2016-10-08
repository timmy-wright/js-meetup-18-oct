var filePrefix = "";

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/' + filePrefix + '*Spec.tsx',
      'src/**/' + filePrefix + '*Spec.ts',
      // 'functions/**/' + filePrefix + '*Spec.ts'
    ],
    singleRun: true,
    // plugins: [webpack, 'karma-jasmine', 'karma-sourcemap-loader', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS2'],
    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap'],
      '**/*.tsx': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.txt'}
      ]
    },
    webpack: {
      devtool: 'source-map',
      resolve: {
        extensions: ['', '.ts', '.tsx', '.css', ".js", ".jsx"],
        moduleDirectories: ["web_modules", "node_modules"],
        alias: {
          specificConfig: "./specificConfig/test.ts"
        }
      },
      module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          },
          {
            test: /\.(ts|tsx)/,
            exclude: /(bower_components|node_modules)/,
            loaders: [
              // "babel?cacheDirectory=karmaCache/JS",
              "awesome-typescript-loader?cacheDirectory=karmaCache/TS&useBabel=true&forkChecker=true"]
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          }
        ],
        preLoaders: [
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { test: /\.(js|jsx)$/, loader: "source-map-loader" }
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    }
  });
};
