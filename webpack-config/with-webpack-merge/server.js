'use strict'

//---------//
// Imports //
//---------//

const webpack = require('webpack'),
  webpackMerge = require('webpack-merge')

const commonConfig = require('../common')

//
//------//
// Main //
//------//

module.exports = webpackMerge(commonConfig, {
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': '"server"',
    })
  ],
})
