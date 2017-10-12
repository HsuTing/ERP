'use strict';

const path = require('path');
const process = require('process');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV === 'production';
const src = './src/public';

module.exports = {
  entry: {
    login: path.resolve(src, './login.js'),
    dashboard: path.resolve(src, './dashboard.js'),
    common: [
      'react-relay',
      'radium',
      'radium-normalize',
      'prop-types',
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: ENV ? '[name].min.js' : '[name].js',
    chunkFilename: ENV ? '[name].min.js' : '[name].js',
    publicPath: ENV ? '/public/js/' : '/assets/',
    path: path.resolve(__dirname, './public/js')
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  },
  plugins: ENV ? [
    new webpack.DefinePlugin({'process.env': {
      NODE_ENV: JSON.stringify('production'),
      TYPE: JSON.stringify('client')
    }}),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.min.js'}),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: true})
  ] : [
    new webpack.DefinePlugin({'process.env': {TYPE: JSON.stringify('client')}}),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.js'}),
    new webpack.HotModuleReplacementPlugin()
  ]
};
