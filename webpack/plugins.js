'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';
const NODE_ENV = process.env.NODE_ENV || 'development';
const BUILD_MODE = process.env.WEBPACK_BUILD_MODE || 'app';
const mode = `${NODE_ENV}-${BUILD_MODE}`;
const outpath = DEBUG ? 'build' : 'dist';

const plugins = (() => {
	return {
		base: new webpack.DefinePlugin({
			'process.env': {
				// why this crazy quoted garden? see link:
				// http://stackoverflow.com/questions/30835213/react-from-npm-cannot-be-used-on-the-client-because-development-is-not-defined
				'NODE_ENV': '\"NODE_ENV\"'
			}
		}),
		provide: new webpack.ProvidePlugin({
            "React": "react",
			"ReactDOM": 'react-dom'
			/*,
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-saga',
      'reselect'
	  */
        }),
		htmlWebpack: new HtmlWebpackPlugin({
			template: path.join(__dirname, '..', 'app', 'index.html'),
			inject: 'body',
		}),
		noErrors: new webpack.NoErrorsPlugin(),
		sourceMapDevTool: new webpack.SourceMapDevToolPlugin({
			filename: null,
			test: /\.tsx?$/
		}),
		manifest: ManifestPlugin(),
		commonsChunk: new webpack.optimize.CommonsChunkPlugin({
			// 'vendor', 'vendor.js' 
			children: true,
			async: true
		}),
		dedupe: new webpack.optimize.DedupePlugin(),
		occurenceOrder: new webpack.optimize.OccurrenceOrderPlugin( /* preferEntry */ true)
	}
})();

function getPluginList(_mode) {
	switch (_mode) {
		case 'production-app':
			return [
				plugins.base,
				plugins.provide,
				plugins.htmlWebpack,
				plugins.noErrors,
				plugins.commonsChunk,
				plugins.dedupe,
				plugins.occurenceOrder
			];
		case 'production-lib':
			return [
				plugins.base,
				plugins.provide,
				plugins.noErrors,
				plugins.commonsChunk,
				plugins.dedupe,
				plugins.occurenceOrder
			];
		case 'development-app':
			return [
				plugins.base,
				plugins.provide,
				plugins.htmlWebpack,
				plugins.noErrors,
				plugins.commonsChunk,
				plugins.dedupe,
				plugins.occurenceOrder
			];
		case 'development-lib':
			return [
				plugins.base,
				plugins.provide,
				plugins.noErrors,
				plugins.commonsChunk,
				plugins.dedupe,
				plugins.occurenceOrder
			];
		default:
			throw new Error(`Unknown webpack build mode: ${_mode}`);
	}
}

const PLUGINS = getPluginList(mode);

module.exports = PLUGINS;