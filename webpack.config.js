'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const applicationEntries = process.env.NODE_ENV === 'development'
  ? [ 'webpack-hot-middleware/client?reload=true' ]
  : [ ];

module.exports = {
  entry: [ './src/index.tsx' ].concat(applicationEntries),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

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
      sinon: 'sinon/pkg/sinon',
    },
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
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

  postcss: () => [
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
  ],

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },

};
