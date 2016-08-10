'use strict';
var path = require('path');

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
}
