'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const DEBUG = process.env.NODE_ENV !== 'production';
const NODE_ENV = process.env.NODE_ENV || 'development';
const BUILD_MODE = process.env.WEBPACK_BUILD_MODE || 'app';
const mode = `${NODE_ENV}-${BUILD_MODE}`;

const entry = ((_mode) => {
  const vendor = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
    'redux-saga',
    'reselect'
  ];
  switch (_mode) {
    case 'production-app':
      return {
        app: [
          path.resolve('.', 'app'),
          path.resolve('.', 'src')
        ],
        // vendor: vendor
      }
    case 'development-app':
      return {
        app: [
          path.resolve('.', 'app'),
          path.resolve('.', 'src'),
          path.join('webpack-hot-middleware', 'client?reload=true')
        ],
        // TODO: Need to get the vendor code into separate chunks.
        // vendor: vendor
      }
    case 'production-lib':
    case 'development-lib':
      return {
        index: [
          path.resolve('.', 'src')
        ]
      };
      /*
      return {
        component: [
          path.resolve('.', 'src')
        ],
        vendor: vendor
      }*/
    default:
      throw new Error(`Unknown webpack build mode: ${_mode}`);
  }
})(mode);

const outpath = DEBUG ? 'build' : 'dist';

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, outpath),
    // filename: '[name].[hash].js',
    filename: '[name].js',
    publicPath: `/`,
    // sourceMapFilename: '[name].[hash].js.map',
    sourceMapFilename: '[name].js.map',
    // chunkFilename: '[id].chunk.js',
    // devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
  debug: DEBUG ? true : false,
  devtool: DEBUG ? 'inline-source-map' : 'hidden-source-map',
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
    alias: {
      // required for enzyme to work properly
      sinon: 'sinon/pkg/sinon'
    },
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: {
      index: '/'
    },
  },
  module: {
    preLoaders: [
      loaders.tslint,
      loaders.sinon
    ],
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.css
    ],
  },
  // ts-loader configuration
  ts: {
    configFileName: DEBUG ? 'tsconfig.json' : 'tsconfig.dist.json'
  },
  postcss: () => [
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // TODO: Need to get the vendor code into separate chunks.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
